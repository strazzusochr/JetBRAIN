# ---- Builder: Chainguard Node (0 CVEs) ----
FROM node:18-slim AS builder

WORKDIR /app

# Dependencies cachen
COPY package*.json ./
RUN npm ci --prefer-offline || npm install

COPY . .

# Berechtigungsproblem fixen: dist und dist/assets löschen (direkt nach COPY)
RUN rm -rf dist dist/assets

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

RUN npm run build

# ─────────────────────────────────────────────
# Runtime: Node.js (Standard für Hugging Face)
FROM node:18-slim AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"
ENV PORT=7860
EXPOSE 7860

# Relevante Dateien kopieren
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/server ./server

# Hugging Face Spaces unterstützen nonroot Users
USER node

# Start Server
CMD ["node", "server/server-prod.mjs"]
