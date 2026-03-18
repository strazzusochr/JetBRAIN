import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useGameStore } from '../../stores/gameStore';

/**
 * CloudStreamViewer — WebRTC + Socket.IO Connector
 * 
 * Verwendet den cloud-rendering server auf Huggingface um das Spiel 
 * mit 60 FPS zu streamen ohne lokale GPU/CPU Last.
 */
export const CloudStreamViewer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const { cloudStreamUrl } = useGameStore(state => state.gameState);
    const [status, setStatus] = useState('Connecting to Cloud...');
    const [metrics, setMetrics] = useState({ fps: 0, quality: 'AAA' });
    const peerRef = useRef<RTCPeerConnection | null>(null);
    const socketRef = useRef<any>(null);

    useEffect(() => {
        // 1. Socket.IO Verbindung zum Rendering-Server
        const socket = io(cloudStreamUrl, {
            transports: ['polling', 'websocket'],
            upgrade: true
        });
        socketRef.current = socket;

        socket.on('connect', () => {
            setStatus('Handshaking with Renderer...');
            socket.emit('register-role', { role: 'viewer' });
        });

        socket.on('renderer-ready', async ({ rendererId }) => {
            setStatus('Establishing WebRTC Stream...');
            
            // 2. WebRTC Peer Connection
            const peer = new RTCPeerConnection({
                iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
            });
            peerRef.current = peer;

            peer.ontrack = (event) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = event.streams[0];
                }
            };

            // Signalling via Socket.IO
            socket.on('webrtc-signal', async ({ fromId, payload }) => {
                if (fromId === rendererId) {
                    if (payload.type === 'offer') {
                        await peer.setRemoteDescription(new RTCSessionDescription(payload));
                        const answer = await peer.createAnswer();
                        await peer.setLocalDescription(answer);
                        socket.emit('webrtc-signal', { targetId: fromId, payload: peer.localDescription });
                    } else if (payload.candidate) {
                        await peer.addIceCandidate(new RTCIceCandidate(payload.candidate));
                    }
                }
            });

            // Initial offer trigger (manche server brauchen das)
            const offer = await peer.createOffer();
            await peer.setLocalDescription(offer);
            socket.emit('webrtc-signal', { targetId: rendererId, payload: peer.localDescription });
        });

        socket.on('transport-metrics', (data) => {
            setMetrics(prev => ({ ...prev, fps: data.viewerFps || data.rendererFps }));
            if (data.viewerFps > 0) setStatus('Streaming Live (Zero-Footprint)');
        });

        socket.on('disconnect', () => setStatus('Cloud Connection Lost. Retrying...'));

        return () => {
            socket.disconnect();
            if (peerRef.current) peerRef.current.close();
        };
    }, [cloudStreamUrl]);

    // Input Forwarding
    const handleInput = (type: string, data: any) => {
        if (socketRef.current?.connected) {
            socketRef.current.emit(type, data);
        }
    };

    return (
        <div className="cloud-viewer-container" style={{
            position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh',
            background: '#000', overflow: 'hidden', display: 'flex', flexDirection: 'column'
        }}>
            <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onMouseMove={(e) => handleInput('mousemove', { x: e.clientX, y: e.clientY })}
                onMouseDown={(e) => handleInput('mousedown', { button: e.button === 0 ? 'left' : 'right' })}
                onMouseUp={(e) => handleInput('mouseup', { button: e.button === 0 ? 'left' : 'right' })}
            />

            <div className="cloud-status-overlay" style={{
                position: 'absolute', top: '2rem', right: '2rem',
                background: 'rgba(0,0,0,0.7)', padding: '1rem', borderRadius: '4px',
                color: '#0ff', fontFamily: 'monospace', border: '1px solid #0ff',
                pointerEvents: 'none'
            }}>
                <div>CLOUD RENDERER: <span style={{ color: '#fff' }}>HUGGINGFACE-SPACE</span></div>
                <div>STATUS: <span style={{ color: status.includes('Live') ? '#0f0' : '#ff0' }}>{status}</span></div>
                <div>STREAM: <span style={{ color: '#fff' }}>1080p @ {metrics.fps} FPS</span></div>
                <div>LOCAL LOAD: <span style={{ color: '#0f0' }}>ZERO (VIDEO ONLY)</span></div>
            </div>

            {/* Hint for Input */}
            <div style={{
                 position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
                 color: 'rgba(255,255,255,0.3)', pointerEvents: 'none'
            }}>
                [ CLOUD INTERFACE ACTIVE — WASD TO MOVE ]
            </div>
        </div>
    );
};
