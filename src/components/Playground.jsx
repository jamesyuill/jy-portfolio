import { Link, Route, Routes } from 'react-router-dom';
import TestPage from '../pages/TestPage';

export const Playground = ({ playgroundSection }) => {
  return (
    <>
      <div className="spacer" ref={playgroundSection}></div>
      <div className="playground">
        <h2>PLAYGROUND</h2>
        <div className="long-line-div"></div>

        <article className="playground-article">
          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/jMLFOIYwE"
              target="_blank"
            >
              <img src="/p5-images/p5-spiral.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/DxD5TZsUM"
              target="_blank"
            >
              <img src="/p5-images/p5-phase-sine-wave.png" alt="" />
            </a>
          </div>
          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/RkvH_NCk7"
              target="_blank"
            >
              <img src="/p5-images/p5-oscillator.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/wUnngcJmr"
              target="_blank"
            >
              <img src="/p5-images/p5-colourful-grid.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/UBsozvsqU"
              target="_blank"
            >
              <img src="/p5-images/p5-connecting-spheres.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/E9YdPVYnB"
              target="_blank"
            >
              <img src="/p5-images/p5-changing-circles.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/zkFa0HLEa"
              target="_blank"
            >
              <img src="/p5-images/p5-circle-of-circles.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/KX3Rtvqz8"
              target="_blank"
            >
              <img src="/p5-images/p5-perlin-noise-circle.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/vQaa7F1qL"
              target="_blank"
            >
              <img src="/p5-images/p5-colourful-squares.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/MZwLi3x7N"
              target="_blank"
            >
              <img src="/p5-images/p5-maurer-rose.png" alt="" />
            </a>
          </div>
          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/qtrULMWBb"
              target="_blank"
            >
              <img src="/p5-images/p5-switch-case.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/h73HBInYv"
              target="_blank"
            >
              <img src="/p5-images/p5-dancing-line.png" alt="" />
            </a>
          </div>
        </article>
      </div>
    </>
  );
};
