import React, { useEffect } from 'react';
import '../App.css';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Box({ setName, hovered, hover }) {
  const boxMesh = React.useRef();
  gsap.registerPlugin(ScrollTrigger);
  // useFrame(({ clock }) => {
  //   boxMesh.current.rotation.x = clock.getElapsedTime();
  // });

  // useFrame(() => {
  //   boxMesh.current.rotation.z = window.scrollY / 200;
  // })
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to(boxMesh.current.position, {
      z: 5,

      scrollTrigger: {
        scrub: true,
      },
    });
    gsap.to(boxMesh.current.rotation, {
      y: 4,

      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <mesh
      ref={boxMesh}
      scale={2}
      rotation={[0, 0, 0]}
      position={[0, 0, -20]}
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
      <meshNormalMaterial attach="material" />
    </mesh>
  );
}
