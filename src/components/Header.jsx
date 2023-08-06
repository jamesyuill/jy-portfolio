import { Nav } from './Nav';

export const Header = ({
  welcomeHome,
  technicalSkills,
  projectsSection,
  contactSection,
  playgroundSection,
}) => {
  return (
    <Nav
      welcomeHome={welcomeHome}
      technicalSkills={technicalSkills}
      projectsSection={projectsSection}
      contactSection={contactSection}
      playgroundSection={playgroundSection}
    />
  );
};
