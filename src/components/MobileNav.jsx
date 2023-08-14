import { useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseFill } from 'react-icons/ri';
import useClickOutside from './useClickOutside';

export const MobileNav = ({
  welcomeHome,
  technicalSkills,
  projectsSection,
  contactSection,
  playgroundSection,
}) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  const hamburgerIcon = (
    <RxHamburgerMenu
      size={40}
      className="hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <RiCloseFill
      size={50}
      className="hamburger"
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  useClickOutside(menuRef, () => setOpen(false));

  return (
    <>
      {open ? closeIcon : hamburgerIcon}
      {open ? (
        <nav className="mobile-nav-menu" ref={menuRef}>
          <ul>
            <li
              className="link"
              onClick={() => {
                scrollDown(welcomeHome);
                closeMobileMenu();
              }}
            >
              HOME
            </li>
            <li
              className="link"
              onClick={() => {
                scrollDown(technicalSkills);
                closeMobileMenu();
              }}
            >
              TECH SKILLS
            </li>
            <li
              className="link"
              onClick={() => {
                scrollDown(projectsSection);
                closeMobileMenu();
              }}
            >
              PROJECTS
            </li>
            <li
              className="link"
              onClick={() => {
                scrollDown(contactSection);
                closeMobileMenu();
              }}
            >
              CONTACT
            </li>
            <li
              className="link"
              onClick={() => {
                scrollDown(playgroundSection);
                closeMobileMenu();
              }}
            >
              PLAYGROUND
            </li>
          </ul>
        </nav>
      ) : null}
    </>
  );
};
