export default function BallsDropping() {
  const techStack = ['Javascript', 'Three.js', 'Tone.js'];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>Balls Dropping: Audio/Visual App</h3>

        <div className="image-div">
          <a href="https://balls-dropping.netlify.app/" target="_blank">
            <img
              src="/images/balls-dropping-desktop.png"
              alt="Preview of dropping balls app"
            />
          </a>
        </div>
        <div className="desc">
          <div className="description">
            <br />

            <p>
              - Build in vanilla Three.js and using Tone.js for the audio
              elements
            </p>
            <p>
              - The aim was to get a visual representation of a bouncing ball,
              but once I'd built one ball I then wanted to generate more. I then
              restructured the bouncing ball as an extended class with it's own
              methods.
            </p>
            <p>
              - I would like to add the ability for a user to upload an audio
              clip and for that to be used. Maybe even to split the sounds up
              over the number of balls.
            </p>
            <p>- To learn more about the app visit the github links below.</p>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/jamesyuill/bouncing-ball" target="_blank">
            <p className="p-link">Github</p>
          </a>

          <a href="https://balls-dropping.netlify.app/" target="_blank">
            <p className="p-link">Deployed Site</p>
          </a>
        </div>
        <div className="project-tech-stack">
          <ul>
            {techStack.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
