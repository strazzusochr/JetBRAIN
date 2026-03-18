import * as THREE from 'three';

export class LODManager {
    private static instance: LODManager;
    private lodThresholds = [5, 15, 30, 60]; // Distanzen für LOD 0, 1, 2, 3, 4

    public static getInstance(): LODManager {
        if (!LODManager.instance) {
            LODManager.instance = new LODManager();
        }
        return LODManager.instance;
    }

    /**
     * Berechnet das LOD-Level basierend auf der Distanz zur Kamera.
     */
    public getLODLevel(distance: number): number {
        if (distance < this.lodThresholds[0]) return 0;
        if (distance < this.lodThresholds[1]) return 1;
        if (distance < this.lodThresholds[2]) return 2;
        if (distance < this.lodThresholds[3]) return 3;
        return 4;
    }

    /**
     * Hilfsmethode zur Berechnung der Distanz zwischen zwei Positionen (NPC und Kamera).
     */
    public calculateDistance(pos1: [number, number, number], cameraPos: THREE.Vector3): number {
        const dx = pos1[0] - cameraPos.x;
        const dy = pos1[1] - cameraPos.y;
        const dz = pos1[2] - cameraPos.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

export const lodManager = LODManager.getInstance();
