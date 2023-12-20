import { useEffect, useRef } from 'react';
import { BoxGeometry, Color, Matrix4, Mesh, Object3D } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useFrame } from '@react-three/fiber';
gsap.registerPlugin(ScrollTrigger);

export default function Instanced() {
  let count = 200;
  const instancedMeshRef = useRef();
  const geometryRef = useRef();
  const tl = gsap.timeline();
  let temp = new Object3D();
  let counter = 0;

  useEffect(() => {
    for (let i = 0; i < count; i++) {
      const id = counter++;
      temp.position.set(
        Math.random() * 30,
        Math.random() * 20,
        Math.random() * 40
      );
      temp.rotation.set(10, Math.random() * 10, Math.random() * 5);
      temp.scale.set(Math.random(), Math.random(), Math.random());
      temp.updateMatrix();
      temp.frustumCulled = false;
      instancedMeshRef.current.setMatrixAt(id, temp.matrix);
      instancedMeshRef.current.setColorAt(
        id,
        new Color(Math.random() * 0xffffff)
      );
    }
    // Update the instance
    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  }, []);

  const matrix = new Matrix4();
  useFrame(({ clock }) => {
    const t = clock.oldTime * 0.0006;

    for (let i = 0; i < count; i++) {
      instancedMeshRef.current.getMatrixAt(i, matrix);
      matrix.decompose(temp.position, temp.rotation, temp.scale);
      temp.rotation.x = (i / count) * t;
      temp.rotation.y = (i / count) * t;
      temp.rotation.z = ((i / count) * t) / 1200;
      temp.updateMatrix();
      instancedMeshRef.current.setMatrixAt(i, temp.matrix);
    }

    instancedMeshRef.current.instanceMatrix.needsUpdate = true;
  });

  useEffect(() => {
    tl.to(instancedMeshRef.current.position, {
      z: -10,

      scrollTrigger: {
        scrub: 1,
      },
    });
    // tl.to(instancedMeshRef.current.position, {
    //   y: 1,

    //   scrollTrigger: {
    //     scrub: 1,
    //   },
    // });
  }, []);

  return (
    <instancedMesh
      ref={instancedMeshRef}
      args={[null, null, count]}
      position={[-15, -13, -50]}
    >
      <boxGeometry attach="geometry" />
      <meshStandardMaterial />
    </instancedMesh>
  );
}
