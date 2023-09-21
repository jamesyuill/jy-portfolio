import 'https://aframe.io/releases/1.4.0/aframe.min.js';
import '../utils/color-toggle';
import '../utils/color-hover';

export default function AFTerrain() {
  return (
    <div>
      <a-scene cursor="rayOrigin:mouse">
        <a-sky color="#fae29c"></a-sky>
        <a-entity position="-4 0 -5" rotation="0 -140 0">
          <a-camera></a-camera>
        </a-entity>

        <a-entity
          light="type:point;color:#fff;intensity:1;castShadow:true;"
          position="-3 4 -7"
        ></a-entity>

        <a-box
          position="-3 0.5 0"
          shader="standard"
          roughness="0.2"
          color="#ffffff"
          shadow="cast:true"
          color-toggle
          color-hover
        ></a-box>

        <a-box
          position="0 0.5 0"
          shader="standard"
          roughness="0.2"
          color="#ffffff"
          shadow="cast:true"
          color-toggle
          color-hover
        ></a-box>

        <a-box
          position="3 0.5 0"
          shader="standard"
          roughness="0.2"
          color="#ffffff"
          shadow="cast:true"
          color-toggle
          color-hover
        ></a-box>

        <a-plane
          height="50"
          width="50"
          rotation="-90 0 0"
          shadow="receive:true;"
        ></a-plane>
      </a-scene>
    </div>
  );
}
