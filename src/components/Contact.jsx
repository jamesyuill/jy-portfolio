import {
  AiFillTwitterSquare,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from 'react-icons/ai';

export const Contact = ({ contactSection }) => {
  return (
    <>
      <div className="contact" ref={contactSection}>
        <h2>CONTACT</h2>
        <div className="long-line-div"></div>
        <div className="contact-and-socials">
          <div className="form-wrapper">
            <form className="contact-form">
              <label htmlFor="firstname">FIRST NAME: </label>
              <input className="input" type="text" id="firstname" />

              <label htmlFor="lastname">LAST NAME: </label>
              <input className="input" type="text" id="lastname" />
              <label htmlFor="emailaddress">EMAIL: </label>
              <input className="input" type="email" id="emailaddress" />
              <label htmlFor="message">MESSAGE: </label>
              <textarea className="input" id="message" rows={4} />
            </form>
          </div>
          <div className="socials-wrapper">
            <div className="socials">
              <p>SOCIALS</p>
              <div className="icons">
                <a
                  href="https://www.linkedin.com/in/jamesyuill/"
                  target="_blank"
                >
                  <AiOutlineLinkedin size={40} />
                </a>
                <a
                  href="http://www.instagram.com/reanimatedgif"
                  target="_blank"
                >
                  <AiOutlineInstagram size={40} />
                </a>
                <a href="http://www.twitter.com/jamesyuill" target="_blank">
                  <AiFillTwitterSquare size={40} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
