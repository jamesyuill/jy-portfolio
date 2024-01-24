import { Link } from 'react-router-dom';
import Jynews from '../projects/Jynews';
import PokemonBattle from '../projects/PokemonBattle';
import { useState } from 'react';
import CableTvSite from '../projects/CableTvSite';
import GuessWhat from '../projects/GuessWhat';
import ProjectsNavBar from './ProjectsNavBar';
import WhatCarb from '../projects/WhatCarb';
import BallsDropping from '../projects/BallsDropping';
import EtsyInstaScraper from '../projects/EtsyInstaScraper';

export const Projects = ({ projectsSection }) => {
  const [displayProject, setDisplayProject] = useState(1);

  const projectsList = {
    1: <BallsDropping />,
    2: <WhatCarb />,
    3: <GuessWhat />,
    4: <EtsyInstaScraper />,
    5: <Jynews />,
    6: <PokemonBattle />,
    7: <CableTvSite />,
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
