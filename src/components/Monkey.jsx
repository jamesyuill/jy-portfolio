/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 public/monkey.glb
*/

import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { MeshBasicMaterial, MeshNormalMaterial } from 'three';
gsap.registerPlugin(ScrollTrigger);

export function Model(props) {
  const { nodes, materials } = useGLTF('/monkey.glb');
  const monkeyMesh = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(monkeyMesh.current.rotation, {
      y: 7,

      scrollTrigger: {
        scrub: true,
      },
    });
    tl.to(monkeyMesh.current.position, {
      z: 7,

      scrollTrigger: {
        scrub: true,
      },
    });
    tl.to(monkeyMesh.current.position, {
      y: 7,
      delay: 1,
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      scale={2}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    >
      <mesh
        ref={monkeyMesh}
        geometry={nodes.Suzanne.geometry}
        material={materials['Material.001']}
      />
    </group>
  );
}

useGLTF.preload('/monkey.glb');
