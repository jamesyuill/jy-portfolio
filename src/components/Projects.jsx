import { Link } from 'react-router-dom';
import Jynews from '../projects/Jynews';
import PokemonBattle from '../projects/PokemonBattle';
import { useState } from 'react';
import CableTvSite from '../projects/CableTvSite';
import GuessWhat from '../projects/GuessWhat';
import ProjectsNavBar from './ProjectsNavBar';
import WhatCarb from '../projects/WhatCarb';

export const Projects = ({ projectsSection }) => {
  const [displayProject, setDisplayProject] = useState(1);

  const projectsList = {
    1: <WhatCarb />,
    2: <GuessWhat />,
    3: <Jynews />,
    4: <PokemonBattle />,
    5: <CableTvSite />,
  };

  return (
    <>
      <div className="spacer" ref={projectsSection}></div>
      <div className="projects">
        <h2>PROJECTS</h2>
        <div className="long-line-div"></div>

        <ProjectsNavBar
          projectsList={projectsList}
          displayProject={displayProject}
          setDisplayProject={setDisplayProject}
        />

        <main>{projectsList[displayProject]}</main>
      </div>
    </>
  );
};
