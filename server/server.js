import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import path from 'path';

function parseAllowedOrigins(raw) {
    return String(raw || 'http://127.0.0.1:3001,http://localhost:3001,http://127.0.0.1:5173,http://localhost:5173,http://127.0.0.1:5174,http://localhost:5174,http://127.0.0.1:7860,http://localhost:7860')
        .split(',')
        .map((value) => value.trim())
        .filter(Boolean);
}

const ALLOWED_ORIGINS = parseAllowedOrigins(process.env.ALLOWED_ORIGINS);
const WS_SHARED_TOKEN = String(process.env.WS_SHARED_TOKEN || '');

function isAllowedOrigin(origin) {
    if (!origin) return true;
    return ALLOWED_ORIGINS.includes(origin);
}

const app = express();
const server = http.createServer(app);
const PORT = Number(process.env.SOCKET_PORT) || 3000;
const io = new Server(server, {
    cors: {
        origin: (origin, callback) => {
            if (isAllowedOrigin(origin)) {
                callback(null, true);
                return;
            }
            callback(new Error('origin_denied'));
        },
        methods: ["GET", "POST"]
    }
});

let worldState = {
    startTime: Date.now(),
    inGameTime: "06:00",
    stats: {
        killed: 0,
        arrested: 0,
        injured: 0,
        damage: 0
    },
    tension: 10
};

app.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        socketPort: PORT,
        allowedOrigins: ALLOWED_ORIGINS,
    });
});

io.on('connection', (socket) => {
    const socketOrigin = String(socket.handshake.headers.origin || '');
    if (!isAllowedOrigin(socketOrigin)) {
        socket.disconnect(true);
        return;
    }

    if (WS_SHARED_TOKEN) {
        const token = String(socket.handshake.auth?.token || '');
        if (token !== WS_SHARED_TOKEN) {
            socket.disconnect(true);
            return;
        }
    }

    console.log('👤 Client connected:', socket.id);
    
    // Send current world state on join
    socket.emit('init-state', worldState);

    socket.on('update-time', (time) => {
        worldState.inGameTime = time;
        socket.broadcast.emit('time-sync', time);
    });

    socket.on('event-triggered', (eventData) => {
        console.log('📢 Event triggered:', eventData.description);
        socket.broadcast.emit('event-broadcast', eventData);
    });

    socket.on('disconnect', () => {
        console.log('👋 Client disconnected:', socket.id);
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Corona Control Server running on port ${PORT}`);
    console.log(`🔗 Web-App API & Crawler-Endpoint active.`);
});
