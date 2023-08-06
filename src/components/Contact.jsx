import { Link } from 'react-router-dom';

export const Contact = ({ contactSection }) => {
  return (
    <div className="contact" ref={contactSection}>
      <h2>CONTACT</h2>
      <div className="long-line-div"></div>
      <div className="form-wrapper">
        <form className="contact-form">
          <label htmlFor="firstname">FIRST NAME: </label>
          <input type="text" id="firstname" />

          <label htmlFor="lastname">LAST NAME: </label>
          <input type="text" id="lastname" />
          <label htmlFor="emailaddress">EMAIL: </label>
          <input type="email" id="emailaddress" />
          <label htmlFor="message">MESSAGE: </label>
          <textarea id="message" />
        </form>
      </div>

      <div className="socials">
        <nav className="social-links">
          <a
            className="link"
            href="https://www.linkedin.com/in/jamesyuill/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="link"
            href="https://github.com/jamesyuill"
            target="_blank"
          >
            Github
          </a>
          <a
            className="link"
            href="http://www.instagram.com/reanimatedgif"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="link"
            href="http://www.twitter.com/jamesyuill"
            target="_blank"
          >
            Twitter
          </a>
        </nav>
      </div>
    </div>
  );
};
