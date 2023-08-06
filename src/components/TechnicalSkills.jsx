export const TechnicalSkills = ({ technicalSkills }) => {
  return (
    <div className="tech-skills-section" ref={technicalSkills}>
      <h2>TECHNICAL SKILLS</h2>
      <div className="long-line-div"></div>

      <article className="tech-skills-article">
        <div className="tech-skill-card-section">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <div className="tech-skill-card">
              <img src="images/javascript.png" alt="Javascript logo" />
              <p>JavaScript</p>
            </div>
          </a>
        </div>

        <a href="https://react.dev/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/react.png" alt="React logo" />
            <p>React</p>
          </div>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
        >
          <div className="tech-skill-card">
            <img src="images/html5.png" alt="HTML5 logo" />
            <p>HTML5</p>
          </div>
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
        >
          <div className="tech-skill-card">
            <img src="images/css.png" alt="CSS logo" />
            <p>CSS</p>
          </div>
        </a>
        <a href="https://nodejs.org/en/docs" target="_blank">
          <div className="tech-skill-card">
            <img src="images/nodejs.png" alt="Node.js logo" />
            <p>Node.js</p>
          </div>
        </a>
        <a href="https://expressjs.com/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/express.png" alt="Express.js logo" />
            <p>Express.js</p>
          </div>
        </a>
        <a
          href="https://www.w3schools.com/sql/sql_quickref.asp"
          target="_blank"
        >
          <div className="tech-skill-card">
            <img src="images/sql.png" alt="sql logo" />
            <p>SQL</p>
          </div>
        </a>
        <a href="https://www.postgresql.org/docs/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/postgresql.png" alt="Postgresql logo" />
            <p>PostgreSQL</p>
          </div>
        </a>
        <a href="https://jestjs.io/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/jest.png" alt="Jest logo" />
            <p>Jest</p>
          </div>
        </a>

        <a href="https://www.ableton.com/en/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/abletonlive.png" alt="Ableton Live logo" />
            <p>Ableton Live</p>
          </div>
        </a>
        <a href="https://www.avid.com/pro-tools" target="_blank">
          <div className="tech-skill-card">
            <img src="images/protools.png" alt="Pro Tools logo" />
            <p>Pro Tools</p>
          </div>
        </a>
        <a href="https://threejs.org/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/three.png" alt="Three.js logo" />
            <p>Three.js</p>
          </div>
        </a>
        <a href="https://www.blender.org/" target="_blank">
          <div className="tech-skill-card">
            <img src="images/blender.png" alt="Blender logo" />
            <p>Blender</p>
          </div>
        </a>
        <a
          href="https://derivative.ca/UserGuide/Getting_Started_With_TouchDesigner"
          target="_blank"
        >
          <div className="tech-skill-card">
            <img src="images/touchdesigner.png" alt="TouchDesigner logo" />
            <p>Touchdesigner</p>
          </div>
        </a>
      </article>
    </div>
  );
};
