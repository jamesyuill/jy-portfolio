export const Welcome = ({ welcomeHome }) => {
  return (
    <div className="welcome" ref={welcomeHome}>
      <h1>HELLO</h1>
      <br></br>
      <h2>
        I'M <span className="spanpink">JAMES</span>
      </h2>
    </div>
  );
};
