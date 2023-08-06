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
    </div>
  );
};
