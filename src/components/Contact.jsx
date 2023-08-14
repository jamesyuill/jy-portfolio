import { RxInstagramLogo, RxLinkedinLogo, RxTwitterLogo } from 'react-icons/rx';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import FormSuccess from './FormSuccess';
import FormFailure from './FormFailure';

export const Contact = ({ contactSection }) => {
  const form = useRef();
  const formResult = useRef();
  const [response, setResponse] = useState(0);
  const [formData, setFormdata] = useState({
    firstname: '',
    lastname: '',
    emailaddress: '',
    message: '',
  });
  emailjs.init('RMTyNNzRXg99eLPWT');

  const responseObj = {
    0: '',
    1: <FormSuccess />,
    2: <FormFailure />,
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_101pd7k',
        'template_v62otln',
        form.current,
        'RMTyNNzRXg99eLPWT'
      )
      .then(
        (result) => {
          console.log(result.text);
          setResponse(1);
        },
        (error) => {
          console.log(error.text);
          setResponse(2);
        }
      );

    setFormdata({
      ...formData,
      firstname: '',
      lastname: '',
      emailaddress: '',
      message: '',
    });
  };

  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="contact" ref={contactSection}>
        <h2>CONTACT</h2>
        <div className="long-line-div"></div>
        <div className="contact-and-socials">
          <div className="form-wrapper">
            <form
              id="contact-form"
              className="contact-form"
              ref={form}
              onSubmit={sendEmail}
            >
              <label htmlFor="firstname">FIRST NAME: </label>
              <input
                className="input"
                type="text"
                name="firstname"
                value={formData.firstname || ''}
                onChange={handleChange}
                required
              />

              <label htmlFor="lastname">LAST NAME: </label>
              <input
                className="input"
                type="text"
                name="lastname"
                value={formData.lastname || ''}
                onChange={handleChange}
                required
              />
              <label htmlFor="emailaddress">EMAIL: </label>
              <input
                className="input"
                type="email"
                name="emailaddress"
                value={formData.emailaddress || ''}
                onChange={handleChange}
                required
              />
              <label htmlFor="message">MESSAGE: </label>
              <textarea
                className="input"
                name="message"
                rows={4}
                value={formData.message || ''}
                onChange={handleChange}
                required
              />
              <button type="submit">SUBMIT</button>
              <div className="form-result">{responseObj[response]}</div>
            </form>
          </div>
          <div className="socials-wrapper">
            <div className="socials">
              <p>SOCIALS</p>
              <div className="icons">
                <a
                  className="icon-link"
                  href="https://www.linkedin.com/in/jamesyuill/"
                  target="_blank"
                >
                  <RxLinkedinLogo size={40} />
                </a>
                <a
                  className="icon-link"
                  href="http://www.instagram.com/reanimatedgif"
                  target="_blank"
                >
                  <RxInstagramLogo size={40} />
                </a>
                <a
                  className="icon-link"
                  href="http://www.twitter.com/jamesyuill"
                  target="_blank"
                >
                  <RxTwitterLogo size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
