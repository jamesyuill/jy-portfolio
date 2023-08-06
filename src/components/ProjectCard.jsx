export const ProjectCard = () => {
  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>{project.title}</h3>
        <div className="desc-img">
          <div className="description" style={{ whitespace: 'pre-line' }}>
            <p>{project.description}</p>
          </div>
          <div className="image-div">
            <img src={project.phoneDisplay_Url} />
          </div>
          <div className="github-link">
            <a
              href="https://github.com/jamesyuill/fe-react-data-visualisation"
              target="_blank"
            >
              <p className="p-link">View the Github</p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};
