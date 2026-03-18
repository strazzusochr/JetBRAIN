/**
 * ☁️ CLOUD STREAM VIEWER — ZERO LOCAL FOOTPRINT
 * 
 * Diese Komponente empfängt den WebRTC-Videostream vom Cloud-Renderer
 * (stream-server.mjs auf Huggingface) und zeigt ihn als <video> an.
 * 
 * ZERO GPU/CPU/Disk — Der lokale PC ist nur noch ein Viewer.
 * Keyboard/Mouse-Input wird via Socket.IO an die Cloud weitergeleitet.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

// Cloud-Server URL — Huggingface Space oder lokaler Fallback
const CLOUD_URL = import.meta.env.VITE_CLOUD_URL || 'https://wrzzzrzr-jetbrain.hf.space';
const LOCAL_FALLBACK_URL = 'http://localhost:7860';

type StreamProfile = 'low' | 'medium' | 'high' | 'aaa';

interface TransportMetrics {
  rendererFps: number;
  viewerFps: number;
  transportSource: string;
}

interface CloudStreamViewerProps {
  onLocalRenderRequested?: () => void;
}

export const CloudStreamViewer = ({ onLocalRenderRequested }: CloudStreamViewerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const peerRef = useRef<RTCPeerConnection | null>(null);
  const rendererId = useRef<string | null>(null);
  const frameCountRef = useRef(0);
  const lastFpsTimeRef = useRef(Date.now());

  const [status, setStatus] = useState<'connecting' | 'waiting' | 'streaming' | 'error'>('connecting');
  const [profile, setProfile] = useState<StreamProfile>('aaa');
  const [metrics, setMetrics] = useState<TransportMetrics>({ rendererFps: 0, viewerFps: 0, transportSource: 'unknown' });
  const [viewerFps, setViewerFps] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [cloudUrl, setCloudUrl] = useState(CLOUD_URL);

  // --- WebRTC Peer erstellen ---
  const closePeer = useCallback(() => {
    if (peerRef.current) {
      try { peerRef.current.close(); } catch (_) {}
      peerRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  }, []);

  const startViewerPeer = useCallback(async (nextRendererId: string) => {
    if (!nextRendererId || !socketRef.current) return;
    rendererId.current = nextRendererId;
    closePeer();

    const peer = new RTCPeerConnection({ iceServers: [] });
    peerRef.current = peer;

    peer.ontrack = (event) => {
      const [stream] = event.streams;
      if (stream && videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play().catch(() => {});
        setStatus('streaming');
      }
    };

    peer.onicecandidate = (event) => {
      if (event.candidate && rendererId.current) {
        socketRef.current?.emit('webrtc-signal', {
          targetId: rendererId.current,
          payload: { candidate: event.candidate },
        });
      }
    };

    peer.onconnectionstatechange = () => {
      if (peer.connectionState === 'failed' || peer.connectionState === 'closed') {
        setStatus('waiting');
      }
    };

    const offer = await peer.createOffer({ offerToReceiveVideo: true, offerToReceiveAudio: false });
    await peer.setLocalDescription(offer);
    socketRef.current.emit('webrtc-signal', {
      targetId: rendererId.current,
      payload: peer.localDescription,
    });
  }, [closePeer]);

  // --- Socket.IO Verbindung ---
  useEffect(() => {
    let currentUrl = cloudUrl;
    
    const connect = (url: string) => {
      const socket = io(url, {
        transports: ['polling', 'websocket'],
        upgrade: true,
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
        timeout: 15000,
      });
      socketRef.current = socket;

      socket.on('connect', () => {
        setStatus('waiting');
        setErrorMsg('');
        socket.emit('register-role', { role: 'viewer' });
      });

      socket.on('renderer-ready', async ({ rendererId: rid, profile: p }: any) => {
        if (p) setProfile(p);
        if (rid) {
          setStatus('waiting');
          await startViewerPeer(rid);
        }
      });

      socket.on('renderer-stopped', () => {
        closePeer();
        setStatus('waiting');
      });

      socket.on('transport-metrics', (payload: any) => {
        setMetrics({
          rendererFps: Number(payload.rendererFps) || 0,
          viewerFps: Number(payload.viewerFps) || 0,
          transportSource: payload.transportSource || 'unknown',
        });
      });

      socket.on('webrtc-signal', async ({ fromId, payload }: any) => {
        if (!peerRef.current || fromId !== rendererId.current || !payload) return;
        if (payload.type === 'answer') {
          await peerRef.current.setRemoteDescription(payload);
        } else if (payload.candidate) {
          try { await peerRef.current.addIceCandidate(payload.candidate); } catch (_) {}
        }
      });

      socket.on('connect_error', (err: any) => {
        // Fallback zu lokalem Server wenn Cloud nicht erreichbar
        if (currentUrl === CLOUD_URL && url === CLOUD_URL) {
          console.warn('[CloudViewer] Cloud nicht erreichbar, versuche localhost...');
          socket.disconnect();
          currentUrl = LOCAL_FALLBACK_URL;
          setCloudUrl(LOCAL_FALLBACK_URL);
          connect(LOCAL_FALLBACK_URL);
          return;
        }
        setStatus('error');
        setErrorMsg(`Cloud-Server nicht erreichbar: ${err?.message || 'Verbindungsfehler'}`);
      });

      socket.on('disconnect', () => {
        closePeer();
        setStatus('connecting');
      });

      // Keyboard-Forwarding
      const onKeyDown = (e: KeyboardEvent) => {
        e.preventDefault();
        socket.emit('keydown', { key: e.key, code: e.code });
      };
      const onKeyUp = (e: KeyboardEvent) => {
        e.preventDefault();
        socket.emit('keyup', { key: e.key, code: e.code });
      };
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('keyup', onKeyUp);

      return () => {
        document.removeEventListener('keydown', onKeyDown);
        document.removeEventListener('keyup', onKeyUp);
        socket.disconnect();
      };
    };

    const cleanup = connect(currentUrl);
    return () => cleanup?.();
  }, [cloudUrl, closePeer, startViewerPeer]);

  // --- Mouse-Forwarding ---
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
    if (!socketRef.current || !videoRef.current) return;
    const rect = videoRef.current.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / rect.width * 1920);
    const y = Math.round((e.clientY - rect.top) / rect.height * 1080);
    socketRef.current.emit('mousemove', { x, y });
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLVideoElement>) => {
    if (!socketRef.current || !videoRef.current) return;
    const rect = videoRef.current.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left) / rect.width * 1920);
    const y = Math.round((e.clientY - rect.top) / rect.height * 1080);
    socketRef.current.emit('click', { x, y });
  }, []);

  // --- FPS Counter ---
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = (now - lastFpsTimeRef.current) / 1000;
      const fps = Math.round(frameCountRef.current / Math.max(elapsed, 0.001));
      setViewerFps(fps);
      socketRef.current?.emit('viewer-stats', { fps });
      frameCountRef.current = 0;
      lastFpsTimeRef.current = now;
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Video Frame Counting
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (typeof video.requestVideoFrameCallback === 'function') {
      const loop = () => {
        frameCountRef.current++;
        video.requestVideoFrameCallback(loop);
      };
      video.requestVideoFrameCallback(loop);
    } else {
      const handler = () => { frameCountRef.current++; };
      video.addEventListener('timeupdate', handler);
      return () => video.removeEventListener('timeupdate', handler);
    }
  }, []);

  // --- Profile Switcher ---
  const switchProfile = useCallback(async (p: StreamProfile) => {
    try {
      await fetch(`${cloudUrl}/api/profile/${p}`, { method: 'POST' });
      setProfile(p);
    } catch (e) {
      console.error('Profile switch failed:', e);
    }
  }, [cloudUrl]);

  return (
    <div style={{
      position: 'fixed', inset: 0, background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      fontFamily: "'Segoe UI', sans-serif", color: '#fff', zIndex: 9999,
    }}>
      {/* Cloud HUD */}
      <div style={{
        position: 'fixed', top: 8, left: 8, zIndex: 10000,
        background: 'rgba(0,0,0,0.85)', padding: '8px 14px', borderRadius: 8,
        fontFamily: 'monospace', fontSize: 12, color: '#0f0',
        border: '1px solid rgba(0,255,0,0.3)',
      }}>
        ☁️ CLOUD GAMING | ZERO LOCAL FOOTPRINT<br/>
        RENDER: {metrics.rendererFps} FPS | VIDEO: {viewerFps} FPS<br/>
        PROFIL: {profile.toUpperCase()} | {metrics.transportSource.toUpperCase()}<br/>
        SERVER: {cloudUrl}
      </div>

      {/* Quality Buttons */}
      <div style={{
        position: 'fixed', top: 8, right: 8, zIndex: 10000,
        display: 'flex', gap: 6,
      }}>
        {(['low', 'medium', 'high', 'aaa'] as StreamProfile[]).map(p => (
          <button key={p} onClick={() => switchProfile(p)} style={{
            padding: '6px 12px', borderRadius: 6, cursor: 'pointer',
            background: p === profile ? 'rgba(0,255,0,0.2)' : 'rgba(0,0,0,0.7)',
            border: `1px solid ${p === profile ? '#0f0' : '#333'}`,
            color: p === profile ? '#0f0' : '#aaa',
            fontWeight: 700, fontSize: 12,
          }}>
            {p.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Status Overlay */}
      {status !== 'streaming' && (
        <div style={{
          position: 'absolute', zIndex: 10001,
          textAlign: 'center', padding: '2rem',
        }}>
          <div style={{
            width: 40, height: 40, border: '3px solid #333',
            borderTop: '3px solid #0f0', borderRadius: '50%',
            animation: 'spin 1s linear infinite', margin: '0 auto 1rem',
          }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          {status === 'connecting' && <div>Verbinde mit Cloud-Renderer...</div>}
          {status === 'waiting' && <div>Cloud-Renderer wird gestartet...<br/><small style={{color:'#888'}}>Puppeteer initialisiert Three.js auf dem Server</small></div>}
          {status === 'error' && (
            <div>
              <div style={{color: '#ff4444', marginBottom: 12}}>⚠️ {errorMsg}</div>
              <button onClick={onLocalRenderRequested} style={{
                padding: '10px 20px', cursor: 'pointer', background: '#4466aa',
                border: 'none', color: '#fff', borderRadius: 4, fontWeight: 'bold',
                marginTop: 8,
              }}>
                LOKAL RENDERN (NOTFALL)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Video Stream */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onContextMenu={e => e.preventDefault()}
        style={{
          width: '100vw', height: '100vh',
          objectFit: 'contain', background: '#000',
        }}
      />
    </div>
  );
};
