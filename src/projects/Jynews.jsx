export default function Jynews() {
  const techStack = [
    'Javascript',
    'React',
    'Express.js',
    'Jest',
    'PostgreSQL',
    'Node.js',
  ];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>Northcoders Solo Full Stack Project: JY News</h3>

        <div className="image-div">
          <a
            href="http://jy-news-fullstack-project.netlify.app/"
            target="_blank"
          >
            <img src="project-images/jy-news-desktop-and-mobile.png" />
          </a>
        </div>
        <div className="desc">
          <div className="description" style={{ whitespace: 'pre-line' }}>
            <br />
            <h4>Back End Server</h4>
            <p>
              - Successfully built a RESTful API and back end server using
              Express, SQL and PostGres.
            </p>
            <p>
              - It was developed using TDD, using Jest, Jest-Sorted and
              Supertest.
            </p>
            <p>
              - We utilised Husky to prevent pushing any commits with failing
              code.
            </p>
            <h4>Front End User Interface</h4>
            <p>
              – Successfully developed a UI that interacts with our Back End
              Server.
            </p>
            <p>
              - This was developed in React and used additional libraries
              React-Router-Dom for the routing and Axios for the API requests.
            </p>
            <p>
              - The project was mainly focused on functionality, but we were
              required to keep in mind the application’s responsiveness and
              accessibility
            </p>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/jamesyuill/fe-jy-news" target="_blank">
            <p className="p-link">FrontEnd Github</p>
          </a>
          <a href="https://github.com/jamesyuill/jy-news" target="_blank">
            <p className="p-link">BackEnd Github</p>
          </a>
          <a
            href="https://jy-news-fullstack-project.netlify.app/"
            target="_blank"
          >
            <p className="p-link">Deployed Site</p>
          </a>
        </div>
        <div className="project-tech-stack">
          <ul>
            {techStack.map((item, i) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}
