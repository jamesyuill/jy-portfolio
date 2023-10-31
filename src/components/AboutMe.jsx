export default function AboutMe({ aboutMe }) {
  return (
    <>
      <div className="spacer" ref={aboutMe}></div>

      <div className="about-me">
        <h2>ABOUT ME</h2>
        <div className="long-line-div"></div>
        <article className="about-me-article">
          <div className="about-me-image">
            <img
              className="profile-image"
              src="/images/jy-profile-image.jpg"
              alt="A picture of me working a synth"
            />
          </div>
          <div className="about-me-card">
            <p>Hi! I'm James.</p>
            <p>
              I’m a Junior Full Stack Javascript Developer, looking for a career
              in the Technology industry.
            </p>
            <p>
              After teaching myself coding through experimenting with libraries
              Three.js and P5.js. I enrolled in the Northcoders Software
              Development bootcamp, where I learned full stack development.
            </p>
            <p>
              Most of my working life has been in the music industry, producing
              music for myself and others. Now I’m ready for a career in
              Technology and excited about developing new skills.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
