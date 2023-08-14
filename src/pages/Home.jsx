import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import React, { Suspense, useRef, useState } from 'react';
import { Welcome } from '../components/Welcome';
import '/src/App.css';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Playground } from '../components/Playground';
import { Model } from '../components/Monkey';
import { Header } from '../components/Header';
import { Environment, Float } from '@react-three/drei';

function Home() {
  const welcomeHome = useRef(null);
  const technicalSkills = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const playgroundSection = useRef(null);
  return (
    <>
      <div className="main">
        <Header
          welcomeHome={welcomeHome}
          technicalSkills={technicalSkills}
          projectsSection={projectsSection}
          contactSection={contactSection}
          playgroundSection={playgroundSection}
        />

        <Welcome welcomeHome={welcomeHome} />
        <TechnicalSkills technicalSkills={technicalSkills} />
        <Projects projectsSection={projectsSection} />
        <Contact contactSection={contactSection} />
        <Playground playgroundSection={playgroundSection} />
      </div>

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
          {/* <OrbitControls enableZoom={false} /> */}
          <ambientLight intensity={0.1} />

          <directionalLight position={[-2, 5, 2]} intensity={0.3} />
          <Environment files="./old_room_4k.hdr" background blur={0.8} />
          <Suspense fallback={null}>
            {/* <Box setName={setName} hovered={hovered} hover={hover} /> */}

            <Float>
              <Model />
            </Float>
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}

export default Home;