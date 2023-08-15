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
        <h1>
          <span className="spanpink">James Yuill</span>
        </h1>
        <h2>
          <span className="spanpink">Full Stack Developer</span>
        </h2>
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
