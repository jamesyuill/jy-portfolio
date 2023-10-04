import { Link } from 'react-router-dom';

export default function ProjectsNavBar({
  projectsList,
  displayProject,
  setDisplayProject,
}) {
  return (
    <nav className="projects-nav">
      <Link
        className={
          displayProject === 1
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(1);
        }}
      >
        <p>Balls Dropping</p>
      </Link>
      |
      <Link
        className={
          displayProject === 2
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(2);
        }}
      >
        <p>What Carb?</p>
      </Link>
      |
      <Link
        className={
          displayProject === 3
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(3);
        }}
      >
        <p>Guess What?!</p>
      </Link>
      |
      <Link
        className={
          displayProject === 4
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(4);
        }}
      >
        <p>JY News App</p>
      </Link>
      |
      <Link
        className={
          displayProject === 5
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(5);
        }}
      >
        <p>Pokemon Battle App</p>
      </Link>
      |
      <Link
        className={
          displayProject === 6
            ? 'projects-nav-link-active'
            : 'projects-nav-link'
        }
        onClick={() => {
          setDisplayProject(6);
        }}
      >
        <p>Cable TV Website</p>
      </Link>
    </nav>
  );
}
