import { createNPCMaterial } from '../../materials/AAAMaterialSystem';
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useGameStore } from '../../stores/gameStore';
import { workerManager } from '../../managers/WorkerManager';
import { createHighPolyHumanMesh } from '../../meshes/ProceduralHumanMesh';
import { lodManager } from '../../managers/LODManager';

export const InstancedHumanoid = () => {
    const { camera } = useThree();
    
    // Wir nutzen 5 InstancedMeshes für die 5 LOD-Stufen
    const lod0Ref = useRef<THREE.InstancedMesh>(null);
    const lod1Ref = useRef<THREE.InstancedMesh>(null);
    const lod2Ref = useRef<THREE.InstancedMesh>(null);
    const lod3Ref = useRef<THREE.InstancedMesh>(null);
    const lod4Ref = useRef<THREE.InstancedMesh>(null);
    
    const auraRef = useRef<THREE.InstancedMesh>(null);
    const temp = useMemo(() => new THREE.Object3D(), []);
    const hidden = useMemo(() => {
        const o = new THREE.Object3D();
        o.position.set(0, -1000, 0);
        o.scale.set(0, 0, 0);
        o.updateMatrix();
        return o.matrix.clone();
    }, []);

    // Geometrien für verschiedene LODs
    const geos = useMemo(() => [
        createHighPolyHumanMesh(0), // 200k
        createHighPolyHumanMesh(1), // 50k
        createHighPolyHumanMesh(2), // 10k
        createHighPolyHumanMesh(3), // 2k
        createHighPolyHumanMesh(4), // 500
    ], []);

    // Materialien (Basis)
    const baseMat = useMemo(() => new THREE.MeshPhysicalMaterial({ metalness: 0, roughness: 0.5 }), []);

    // Aura geometry
    const auraGeo = useMemo(() => new THREE.SphereGeometry(0.8, 8, 8), []);
    const auraMat = useMemo(() => new THREE.MeshBasicMaterial({ 
        transparent: true, 
        opacity: 0.2,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    }), []);

    const MAX = 500;

    useFrame(() => {
        const refs = [lod0Ref, lod1Ref, lod2Ref, lod3Ref, lod4Ref];
        if (refs.some(r => !r.current) || !auraRef.current) return;
        
        const npcs = useGameStore.getState().npcs;
        const buffer = workerManager.latestNPCBuffer;
        const count = npcs.length;

        // Reset all LOD counts
        const lodCounts = [0, 0, 0, 0, 0];

        for (let i = 0; i < count; i++) {
            const npc = npcs[i];
            let x = npc.position[0], y = 1.35, z = npc.position[2];
            
            if (buffer && buffer.length > i * 12 + 4) {
                x = buffer[i * 12 + 2];
                y = buffer[i * 12 + 3];
                z = buffer[i * 12 + 4];
            }

            const dist = lodManager.calculateDistance([x, y, z], camera.position);
            const lod = lodManager.getLODLevel(dist);

            temp.position.set(x, y, z);
            temp.scale.set(1, 1, 1);
            temp.updateMatrix();

            // Setze Matrix im entsprechenden LOD-Mesh
            const targetRef = refs[lod].current!;
            const idx = lodCounts[lod];
            targetRef.setMatrixAt(idx, temp.matrix);
            
            // Farbe setzen (falls unterstützt)
            const color = new THREE.Color(npc.outfitColor);
            targetRef.setColorAt(idx, color);
            
            lodCounts[lod]++;

            // Aura (nur für nähere NPCs oder global reduziert)
            if (lod < 3) {
                temp.position.set(x, y - 0.5, z);
                temp.scale.set(1, 0.2, 1);
                temp.updateMatrix();
                auraRef.current!.setMatrixAt(i, temp.matrix);
                auraRef.current!.setColorAt(i, color);
            } else {
                auraRef.current!.setMatrixAt(i, hidden);
            }
        }

        // Verstecke ungenutzte Instanzen in jedem LOD-Level
        refs.forEach((ref, l) => {
            const mesh = ref.current!;
            for (let i = lodCounts[l]; i < MAX; i++) {
                mesh.setMatrixAt(i, hidden);
            }
            mesh.instanceMatrix.needsUpdate = true;
            if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
            mesh.count = lodCounts[l];
        });

        auraRef.current.instanceMatrix.needsUpdate = true;
        if (auraRef.current.instanceColor) auraRef.current.instanceColor.needsUpdate = true;
    });

    return (
        <>
            <instancedMesh ref={lod0Ref} args={[geos[0], baseMat, MAX]} castShadow />
            <instancedMesh ref={lod1Ref} args={[geos[1], baseMat, MAX]} castShadow />
            <instancedMesh ref={lod2Ref} args={[geos[2], baseMat, MAX]} />
            <instancedMesh ref={lod3Ref} args={[geos[3], baseMat, MAX]} />
            <instancedMesh ref={lod4Ref} args={[geos[4], baseMat, MAX]} />
            <instancedMesh ref={auraRef} args={[auraGeo, auraMat, MAX]} />
        </>
    );
};
