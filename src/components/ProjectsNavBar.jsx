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
        What Carb?
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
        Guess What?!
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
        JY News App
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
        Pokemon Battle App
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
        Cable TV Website
      </Link>
    </nav>
  );
}
