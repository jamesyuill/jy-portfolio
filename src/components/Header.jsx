import { MobileNav } from './MobileNav';
import { Nav } from './Nav';

export const Header = ({
  welcomeHome,
  aboutMe,
  technicalSkills,
  projectsSection,
  contactSection,
  playgroundSection,
}) => {
  return (
    <>
      <header>
        <div className="header-name">
          <h1>James Yuill</h1>
          <h2>Full Stack Developer</h2>
        </div>
      </header>
      <Nav
        welcomeHome={welcomeHome}
        aboutMe={aboutMe}
        technicalSkills={technicalSkills}
        projectsSection={projectsSection}
        contactSection={contactSection}
        playgroundSection={playgroundSection}
      />
      <MobileNav
        welcomeHome={welcomeHome}
        aboutMe={aboutMe}
        technicalSkills={technicalSkills}
        projectsSection={projectsSection}
        contactSection={contactSection}
        playgroundSection={playgroundSection}
      />
    </>
  );
};
