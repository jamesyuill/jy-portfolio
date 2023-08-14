import React, { useState } from 'react';
import '../App.css';
import { useTexture } from '@react-three/drei';
import colorTexture from '../assets/brushed_concrete_color.png';
import normalTexture from '../assets/brushed_concrete_normal.png';
import { useFrame } from '@react-three/fiber';

export default function Box({ setName, hovered, hover }) {
  const [colorMap, normalMap, displacementMap] = useTexture([
    colorTexture,
    normalTexture,
  ]);

  const boxMesh = React.useRef();

  useFrame(({ clock }) => {
    boxMesh.current.rotation.x = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={boxMesh}
      rotation={[4, 0, 10]}
      onPointerOver={(e) => {
        setName('PINK');
        hover(true);
      }}
      onPointerOut={(e) => {
        hover(false);
        setName('WHITE');
      }}
    >
      <boxGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'white'}
      />
    </mesh>
  );
}
