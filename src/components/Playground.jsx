export const Playground = ({ playgroundSection }) => {
  return (
    <>
      <div className="spacer" ref={playgroundSection}></div>
      <div className="playground">
        <h2>PLAYGROUND</h2>
        <div className="long-line-div"></div>
        <div className="playground-title">P5 Sketches</div>
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

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/zbZDrsdd8"
              target="_blank"
            >
              <img src="/p5-images/p5-growing-circles.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/l0_sIhS_J"
              target="_blank"
            >
              <img src="/p5-images/p5-microsoft-screensaver.png" alt="" />
            </a>
          </div>

          <div className="playground-card">
            <a
              href="https://editor.p5js.org/jamesyuill/full/F-s9W5VXS"
              target="_blank"
            >
              <img src="/p5-images/p5-hello-in-balls.png" alt="" />
            </a>
          </div>
        </article>

        <div className="playground-title">Three Sketches</div>
        <article className="playground-article-aframe">
          <div className="playground-card-aframe">
            <a href="https://floating-grid.netlify.app" target="_blank">
              <img
                src="/three-images/three-floating-grid.png"
                alt="floating grid"
              />
              <p>Floating Grid</p>
            </a>
          </div>

          <div className="playground-card-aframe">
            <a href="https://moody-ball.netlify.app" target="_blank">
              <img src="/three-images/three-moody-ball.png" alt="moody ball" />
              <p>Moody Ball</p>
            </a>
          </div>

          <div className="playground-card-aframe">
            <a href="https://cable-tv-website.netlify.app" target="_blank">
              <img
                src="/three-images/three-cable-tv-website.png"
                alt="cable tv website"
              />
              <p>cable tv Website</p>
            </a>
          </div>
        </article>
        <div className="playground-title">Aframe Sketches</div>
        <article className="playground-article-aframe">
          <div className="playground-card-aframe">
            <a href="/shape-generator" target="_blank">
              <img
                src="/aframe-images/af-shape-generator.png"
                alt="shape generator"
              />
              <p>Shape Generator</p>
            </a>
          </div>
        </article>
      </div>
    </>
  );
};
