export default function PokemonBattle() {
  const techStack = ['Javascript', 'React'];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>Mini React Application: Pokemon Battle!</h3>
        <div className="desc-img">
          <div className="description" style={{ whitespace: 'pre-line' }}>
            <br />

            <p>
              - Successfully built a Pokemon fighting game in React, where users
              could play against a randomly chosen Pokemon.
            </p>
            <p>
              - One of our first React projects that taught us how to hold data
              in state and make third-party API requests.
            </p>
          </div>
          <div className="image-div">
            <a
              href="https://github.com/jamesyuill/fe-react-data-visualisation/blob/main/src/assets/Final%20Project%20Screenshot.png"
              target="_blank"
            >
              <img src="/images/pokemon-mini-app-phonedisplay.png" />
            </a>
          </div>
        </div>
        <div className="github-link">
          <a
            href="https://github.com/jamesyuill/fe-react-data-visualisation"
            target="_blank"
          >
            <p className="p-link">View the Github</p>
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
