export const Playground = ({ playgroundSection }) => {
  return (
    <div className="playground" ref={playgroundSection}>
      <h2>PLAYGROUND</h2>
      <div className="long-line-div"></div>

      <article className="playground-article">
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
            href="https://editor.p5js.org/jamesyuill/full/8LUitckPz"
            target="_blank"
          >
            <img src="/p5-images/p5-random-walker.png" alt="" />
          </a>
        </div>
      </article>
    </div>
  );
};
