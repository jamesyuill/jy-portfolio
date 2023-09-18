import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export function Hello(props) {
  const { nodes, materials } = useGLTF('/hello.glb');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [size, setSize] = useState(0);
  const helloMesh = useRef();
  const tl = gsap.timeline();
  useEffect(() => {
    tl.to(helloMesh.current.position, {
      z: 0,

      scrollTrigger: {
        scrub: 1,
      },
    });
    tl.to(helloMesh.current.position, {
      y: 50,

      scrollTrigger: {
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    if (windowWidth < 400) {
      setSize(2);
    } else {
      setSize(5);
    }
  }, [windowWidth]);

  function resizeWindow() {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', resizeWindow);

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={helloMesh}
        geometry={nodes.Text.geometry}
        material={materials['Material.001']}
        position={[0, 0, -20]}
        scale={size}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/hello.glb');
