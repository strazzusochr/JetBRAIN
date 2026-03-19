# ══════════════════════════════════════════════════════════════
# ☁️ JETBRAIN CLOUD GAMING — ZERO LOCAL FOOTPRINT
# Puppeteer + Chromium rendert Three.js auf dem Server
# Video wird per WebRTC an den Browser gestreamt
# ══════════════════════════════════════════════════════════════

# ---- Builder: Build Frontend Assets ----
FROM node:18-slim AS builder

WORKDIR /app

# Dependencies cachen
COPY package*.json ./
RUN npm ci --prefer-offline || npm install

COPY . .

# dist bereinigen
RUN rm -rf dist dist/assets

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

# ════════════════════════════════════════════════════════════
# Runtime: High-Performance GPU Architecture
# ════════════════════════════════════════════════════════════
FROM nvidia/opengl:1.2-glvnd-runtime-ubuntu22.04 AS runner

# Environment for GPU passthrough
ENV NVIDIA_VISIBLE_DEVICES all
ENV NVIDIA_DRIVER_CAPABILITIES graphics,utility,display

# Install Node.js 18 & Dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y --no-install-recommends \
    nodejs \
    chromium-browser \
    fonts-liberation \
    fonts-noto-color-emoji \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libasound2 \
    libcups2 \
    libdbus-1-3 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    libxshmfence1 \
    libpangocairo-1.0-0 \
    libegl1-mesa \
    libgles2-mesa \
    libvulkan1 \
    mesa-vulkan-drivers \
    xdg-utils \
    xvfb \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=8192"
ENV PORT=7860
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV STREAM_PROFILE=aaa
ENV HEADLESS_MODE=new
ENV RENDER_BACKEND=hardware

EXPOSE 7860

# Relevante Dateien kopieren
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server ./server

# Hugging Face Spaces unterstützen nonroot Users
# Hinweis: Für GPU-Zugriff in manchen Umgebungen ist root oder spezifische Group-Membership nötig.
# Wir bleiben bei node, stellen aber sicher, dass die Pfade stimmen.
USER root
RUN chown -R 1000:1000 /app
USER 1000

# ☁️ Start Cloud-Gaming-Server (Hardware Accelerated)
CMD ["node", "server/stream-server.mjs"]

