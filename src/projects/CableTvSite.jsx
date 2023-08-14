export default function CableTvSite() {
  const techStack = ['Javascript', 'Three.js', 'GSAP'];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>cable tv website</h3>
        <div className="desc-img">
          <div className="description" style={{ whitespace: 'pre-line' }}>
            <br />

            <p>- Created a 3d based website using vanilla Three.js.</p>
            <p>
              - Utilised the animation library GSAP to achieve the switch in
              focus between 3d models.
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
