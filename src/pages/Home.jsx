import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Welcome } from '../components/Welcome';
import '/src/App.css';
import { TechnicalSkills } from '../components/TechnicalSkills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import { Playground } from '../components/Playground';
import { Header } from '../components/Header';
import { Environment, Float, useProgress } from '@react-three/drei';
import Loading from '../components/Loading';
import AboutMe from '../components/AboutMe';
import Instanced from '../components/Instanced';
import { Hello } from '../components/Hello';
import { Physics, RigidBody } from '@react-three/rapier';

function Home() {
  const welcomeHome = useRef(null);
  const aboutMe = useRef(null);
  const technicalSkills = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const playgroundSection = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { loaded, progress } = useProgress();
  useEffect(() => {
    if (loaded === 1) {
      setIsLoading(false);
    }
  }, [loaded]);

  return (
    <>
      {isLoading ? <Loading /> : null}
      <main>
        <div className="main-html">
          <Header
            welcomeHome={welcomeHome}
            aboutMe={aboutMe}
            technicalSkills={technicalSkills}
            projectsSection={projectsSection}
            contactSection={contactSection}
            playgroundSection={playgroundSection}
          />

          <Welcome welcomeHome={welcomeHome} />
          <AboutMe aboutMe={aboutMe} />
          <TechnicalSkills technicalSkills={technicalSkills} />
          <Projects projectsSection={projectsSection} />
          <Contact contactSection={contactSection} />
          <Playground playgroundSection={playgroundSection} />
        </div>

        <div className="wrapper">
          <Canvas
            className="canvas"
            ref={canvasRef}
            gl={{ antialias: true }}
            camera={{
              position: [0, 0, 10],
              fov: 50,
              near: 0.01,
              far: 1000,
            }}
          >
            {/* <OrbitControls enableZoom={false} /> */}
            {/* <ambientLight intensity={0.1} /> */}

            <directionalLight position={[0, 1.3, 1]} intensity={0.2} />
            <Environment preset="warehouse" background blur={0.8} />
            <Suspense fallback={null}>
              <Physics gravity={[0, 0, 0]}>
                <RigidBody colliders="hull">
                  <Hello />
                </RigidBody>
                <Float
                  speed={0.3}
                  rotationIntensity={0.3}
                  floatIntensity={0.4}
                  floatingRange={[1, 10]}
                >
                  <Instanced />
                </Float>
              </Physics>
            </Suspense>
          </Canvas>
        </div>
      </main>
    </>
  );
}

export default Home;
