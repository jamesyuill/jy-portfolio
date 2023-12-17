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
              After a successful career as a music producer, working and touring
              with some amazing artists, I'm applying the same creative skills
              to software engineering.
            </p>
            <p>
              I was known for playing live shows that would range from stripped
              back acoustic to relatively heavy techno. I would spend hours
              programming intricate light shows, triggered by midi and even
              developed a real-time bullet-time rig.
            </p>
            <p>
              After teaching myself coding through experimenting with libraries
              Three.js and P5.js. I enrolled in the Northcoders Software
              Development bootcamp, where I learned full stack development.
            </p>
            <p>
              I'm now no longer touring and spend my time building apps,
              creating art in blender, or learning new libraries.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}
