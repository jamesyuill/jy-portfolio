import { Link } from 'react-router-dom';
import Jynews from '../projects/Jynews';
import PokemonBattle from '../projects/PokemonBattle';
import { useState } from 'react';
import CableTvSite from '../projects/CableTvSite';
import GuessWhat from '../projects/GuessWhat';
import ProjectsNavBar from './ProjectsNavBar';

export const Projects = ({ projectsSection }) => {
  const [displayProject, setDisplayProject] = useState(1);

  const projectsList = {
    1: <GuessWhat />,
    2: <Jynews />,
    3: <PokemonBattle />,
    4: <CableTvSite />,
  };

  return (
    <>
      <div className="spacer" ref={projectsSection}></div>
      <div className="projects">
        <h2>PROJECTS</h2>
        <div className="long-line-div"></div>

        <ProjectsNavBar
          displayProject={displayProject}
          setDisplayProject={setDisplayProject}
        />

        <main>{projectsList[displayProject]}</main>
      </div>
    </>
  );
};
