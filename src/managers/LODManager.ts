import * as THREE from 'three';

export class LODManager {
    private static instance: LODManager;
    // Breitere Thresholds für bessere LOD-Verteilung bei Kameraabstand
    // LOD 0: < 10m (Detail)
    // LOD 1: 10-25m  
    // LOD 2: 25-50m
    // LOD 3: 50-100m
    // LOD 4: > 100m (fernste, Box)
    private lodThresholds = [10, 25, 50, 100];

    public static getInstance(): LODManager {
        if (!LODManager.instance) {
            LODManager.instance = new LODManager();
        }
        return LODManager.instance;
    }

    public getLODLevel(distance: number): number {
        if (distance < this.lodThresholds[0]) return 0;
        if (distance < this.lodThresholds[1]) return 1;
        if (distance < this.lodThresholds[2]) return 2;
        if (distance < this.lodThresholds[3]) return 3;
        return 4;
    }

    public calculateDistance(pos1: [number, number, number], cameraPos: THREE.Vector3): number {
        const dx = pos1[0] - cameraPos.x;
        const dy = pos1[1] - cameraPos.y;
        const dz = pos1[2] - cameraPos.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

export const lodManager = LODManager.getInstance();
