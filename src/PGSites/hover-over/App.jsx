import { Canvas } from '@react-three/fiber';
import Box from './components/Box';
import { Environment, OrbitControls } from '@react-three/drei';
import React, { Suspense, useState } from 'react';

function App() {
  const [hovered, hover] = useState(false);

  return (
    <>
      <div className="wrapper">
        <Canvas
          className="canvas"
          gl={{ antialias: true }}
          camera={{
            position: [0, 0, 10],
            fov: 50,
            near: 0.01,
            far: 1000,
          }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />

          <directionalLight position={[-2, 5, 2]} intensity={1} />
          <Environment
            background={true}
            files="assets/photo_studio_london_hall_4k.hdr"
          />
          <Suspense fallback={null}>
            <Box setName={setName} hovered={hovered} hover={hover} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default App;
