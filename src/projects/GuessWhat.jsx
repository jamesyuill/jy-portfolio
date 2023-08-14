export default function GuessWhat() {
  const techStack = [
    'Javascript',
    'Next.js',
    'Socket.io',
    'Express.js',
    'Jest',
    'MongoDB',
    'Node.js',
  ];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>Northcoders Project: Guess What?!</h3>

        <div className="image-div">
          <a
            href="https://github.com/jamesyuill/fe-react-data-visualisation/blob/main/src/assets/Final%20Project%20Screenshot.png"
            target="_blank"
          >
            <img src="/project-images/guess-what-desktop.png" />
          </a>
        </div>
        <div className="desc">
          <div className="description" style={{ whitespace: 'pre-line' }}>
            <br />

            <p>
              - Developed by a team of 6 trainee Developers for the Northcoders
              final project.
            </p>
            <p>- Completed in ten days.</p>
            <p> - For this project we used Next.js for the front end.</p>
          </div>
        </div>
        <div className="github-link">
          <a
            href="https://github.com/jamesyuill/fe-react-data-visualisation"
            target="_blank"
          >
            <p className="p-link">BackEnd Github</p>
          </a>
          <a
            href="https://github.com/jamesyuill/fe-react-data-visualisation"
            target="_blank"
          >
            <p className="p-link">FrontEnd Github</p>
          </a>

          <a
            href="https://github.com/jamesyuill/fe-react-data-visualisation"
            target="_blank"
          >
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
