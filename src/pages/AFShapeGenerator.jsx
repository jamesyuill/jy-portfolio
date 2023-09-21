import 'https://aframe.io/releases/1.4.0/aframe.min.js';

import { useRef, useState } from 'react';
import '../pages/afshapegenerator.css';

export default function AFShapeGenerator() {
  const sceneRef = useRef(null);
  const [shapeChoice, setShapeChoice] = useState('box');

  const generateCube = () => {
    const entityEl = document.createElement('a-entity');
    entityEl.setAttribute('geometry', {
      primitive: shapeChoice,
      height: 1,
      width: 1,
    });
    entityEl.setAttribute('position', {
      x: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
      y: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
      z: Math.floor(Math.random() * (10 - -10 + 1)) + -10,
    });
    entityEl.setAttribute('rotation', {
      x: Math.random() * 360,
      y: Math.random() * 360,
      z: Math.random() * 360,
    });
    sceneRef.current.appendChild(entityEl);
  };

  const changeShape = () => {
    if (shapeChoice === 'box') {
      setShapeChoice('sphere');
    } else {
      setShapeChoice('box');
    }
  };

  return (
    <>
      <div className="controls">
        <button className="btn" onClick={generateCube}>
          Generate {shapeChoice === 'box' ? 'Cube!' : 'Sphere!'}
        </button>
        <button className="btn" onClick={changeShape}>
          {shapeChoice === 'box' ? 'Sphere' : 'Box'} Mesh
        </button>
        <div className="info">
          <p>W: Forward</p>
          <p>S: Backward</p>
          <p>A: Left</p>
          <p>D: Right</p>
        </div>
      </div>
      <a-scene
        ref={sceneRef}
        light="defaultLightsEnabled: false"
        shadow="enabled:true; autoUpdate:true; type: pcfsoft"
      >
        <a-sky color="#8aade5" shader="flat"></a-sky>

        <a-entity light="type: ambient; color: #8aade5"> </a-entity>

        <a-entity
          light="type:point;
        castShadow: true;
        intensity: 1;
        shadowCameraVisible: false; 
        shadowCameraTop:    1;
        shadowCameraRight:  1;
        shadowCameraLeft:  -1"
          position="0 6 0"
          rotation="0 0 0"
          color="#fff"
        ></a-entity>

        <a-plane
          color="grey"
          shader="standard"
          roughness="1.0"
          rotation="-90 0 0"
          scale="10 10 2"
          shadow="receive: true"
        ></a-plane>

        <a-entity
          rotation="0 0 0"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing:linear"
        >
          <a-camera position="0 3 20" rotation="30 0 0"></a-camera>
        </a-entity>

        <a-box
          color="hotpink"
          position="0 2 0"
          animation="property: rotation; to: 360 360 360; dur: 5000;easing:linear; loop:true"
          shadow="cast: true"
          roughness="0.31"
        ></a-box>

        <a-box scale="4 1 4" shadow="receive:true"></a-box>
      </a-scene>
    </>
  );
}
