export default function WhatCarb() {
  const techStack = ['Javascript', 'React', 'MongoDB', 'Express.js', 'Node.js'];

  return (
    <article className="project-card-article">
      <div className="project-card-div">
        <h3>What Carb? : Dish Selector</h3>

        <div className="image-div">
          <a href="https://what-carb.netlify.app/" target="_blank">
            <img src="project-images/what-carb-desktop-and-mobile.png" />
          </a>
        </div>
        <div className="desc">
          <div className="description">
            <br />

            <p>- Here is a reworked version of an old app idea I had.</p>
            <p>
              - You can get a meal suggestion based on the carbohydrate you
              would like to eat.
            </p>
            <p>
              - I'm using a MongoDB database to store the dishes. A user can
              view, update, add and delete a dish.
            </p>
            <p>- To learn more about the app visit the github links below.</p>
          </div>
        </div>
        <div className="github-link">
          <a href="https://github.com/jamesyuill/what-carb-be" target="_blank">
            <p className="p-link">BackEnd Github</p>
          </a>
          <a
            href="https://github.com/jamesyuill/what-carb-react"
            target="_blank"
          >
            <p className="p-link">FrontEnd Github</p>
          </a>

          <a href="https://what-carb.netlify.app/" target="_blank">
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
