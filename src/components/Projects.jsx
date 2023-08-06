import { Link } from 'react-router-dom';
import Jynews from '../projects/Jynews';
import PokemonBattle from '../projects/PokemonBattle';
import { useState } from 'react';
import CableTvSite from '../projects/CableTvSite';
import GuessWhat from '../projects/GuessWhat';

export const Projects = ({ projectsSection }) => {
  const [displayProject, setDisplayProject] = useState(1);

  const projectsList = {
    1: <GuessWhat />,
    2: <Jynews />,
    3: <PokemonBattle />,
    4: <CableTvSite />,
  };

  return (
    <div className="projects" ref={projectsSection}>
      <h2>PROJECTS</h2>
      <div className="long-line-div"></div>
      <nav className="projects-nav">
        <Link
          className="projects-nav-link"
          onClick={() => {
            setDisplayProject(1);
          }}
        >
          Guess What?!
        </Link>
        |
        <Link
          className="projects-nav-link"
          onClick={() => {
            setDisplayProject(2);
          }}
        >
          JY News App
        </Link>
        |
        <Link
          className="projects-nav-link"
          onClick={() => {
            setDisplayProject(3);
          }}
        >
          Pokemon Battle App
        </Link>
        |
        <Link
          className="projects-nav-link"
          onClick={() => {
            setDisplayProject(4);
          }}
        >
          Cable TV Website
        </Link>
      </nav>
      <main>{projectsList[displayProject]}</main>
    </div>
  );
};
