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
          <a href="https://guess-what-gitkermit.netlify.app/" target="_blank">
            <img src="project-images/guess-what-desktop.png" />
          </a>
        </div>
        <div className="desc">
          <div className="description">
            <br />

            <p>
              - Created a full stack gaming app, in 10 days with 5 other
              developers.
            </p>
            <p>
              - A play on the classic Guess Who, players can select a yes/no
              question to ask about their opponent's card.
            </p>
            <p>
              - Our MVP was a single player game, but with the use of socket.io
              we managed to get a two player game working.
            </p>
            <p>- To learn more about the app visit the github links below.</p>
          </div>
        </div>
        <div className="github-link">
          <a
            href="https://github.com/PabloJulianRial/guess-what-be"
            target="_blank"
          >
            <p className="p-link">BackEnd Github</p>
          </a>
          <a href="https://github.com/jamesyuill/guess-what-fe" target="_blank">
            <p className="p-link">FrontEnd Github</p>
          </a>

          <a href="https://guess-what-gitkermit.netlify.app/" target="_blank">
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
