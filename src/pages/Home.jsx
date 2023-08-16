import { Canvas, useThree } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
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
import Box from '../components/Box';
import AboutMe from '../components/AboutMe';

function Home() {
  const welcomeHome = useRef(null);
  const aboutMe = useRef(null);
  const technicalSkills = useRef(null);
  const projectsSection = useRef(null);
  const contactSection = useRef(null);
  const playgroundSection = useRef(null);
  const canvasRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3500);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log(canvasRef.current.attributes);
      console.log(canvasRef.current.attributes.width.value);
    }, 2000);
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

              <directionalLight position={[0, 1.3, 1]} intensity={0.3} />
              <Environment preset="warehouse" background blur={0.8} />
              <Suspense fallback={null}>
                <Float>
                  <Model />
                  <Box />
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
