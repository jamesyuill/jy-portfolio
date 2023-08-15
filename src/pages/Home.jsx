import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Welcome } from '../components/Welcome';
import '/src/App.css';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Playground } from '../components/Playground';
import { Model } from '../components/Monkey';
import { Header } from '../components/Header';
import { Environment, Float } from '@react-three/drei';
import Loading from '../components/Loading';
import backgroundImage from '/old_room_4k.hdr';

function Home() {
  const welcomeHome = useRef(null);
  const technicalSkills = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const playgroundSection = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main>
          <div className="main-html">
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
              <ambientLight intensity={0.2} />

              <directionalLight position={[-2, 5, 2]} intensity={0.3} />
              <Environment preset="warehouse" background blur={0.8} />
              <Suspense fallback={null}>
                {/* <Box setName={setName} hovered={hovered} hover={hover} /> */}

                <Float>
                  <Model />
                </Float>
              </Suspense>
            </Canvas>
          </div>
        </main>
      )}
    </>
  );
}

export default Home;
