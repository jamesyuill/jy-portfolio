export const Nav = ({
  welcomeHome,
  aboutMe,
  technicalSkills,
  projectsSection,
  contactSection,
  playgroundSection,
}) => {
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <nav className="nav-menu">
      <ul>
        <li
          className="link"
          onClick={() => {
            scrollDown(welcomeHome);
          }}
        >
          HOME
        </li>
        <li
          className="link"
          onClick={() => {
            scrollDown(aboutMe);
          }}
        >
          ABOUT ME
        </li>
        <li
          className="link"
          onClick={() => {
            scrollDown(technicalSkills);
          }}
        >
          TECH SKILLS
        </li>
        <li
          className="link"
          onClick={() => {
            scrollDown(projectsSection);
          }}
        >
          PROJECTS
        </li>
        <li
          className="link"
          onClick={() => {
            scrollDown(contactSection);
          }}
        >
          CONTACT
        </li>
        <li
          className="link"
          onClick={() => {
            scrollDown(playgroundSection);
          }}
        >
          PLAYGROUND
        </li>
      </ul>
    </nav>
  );
};
