import { Link } from 'react-router-dom';

export default function ProjectsNavBar({ displayProject, setDisplayProject }) {
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
        Guess What?!
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
        JY News App
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
        Pokemon Battle App
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
        Cable TV Website
      </Link>
    </nav>
  );
}
