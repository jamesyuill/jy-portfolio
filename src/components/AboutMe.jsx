export default function AboutMe({ aboutMe }) {
  return (
    <>
      <div className="spacer" ref={aboutMe}></div>

      <div className="about-me">
        <h2>ABOUT ME</h2>
        <div className="long-line-div"></div>
        <article className="about-me-article">
          <div className="about-me-image">
            <img className="profile-image" src="/jy-profile-image.jpg" alt="" />
          </div>
          <div className="about-me-card">
            <p>Hi! I'm James.</p>
            <p>
              I’m a Junior Full Stack JavaScript Developer, looking to implement
              the skills I’ve acquired during my time enrolled in Northcoders
              Software Development bootcamp.
            </p>
            <p>
              After teaching myself visual software Blender and Touchdesigner, I
              realised that I actually like learning, and more specifically
              teaching myself new skills. Coding was initially an extension of
              this, working with Javascript libraries P5.js and Three.js really
              inspired me to learn more.
            </p>
            <p>
              Most of my working career has been in the music industry,
              producing music for myself and other artists, but I’m now ready
              for a career in technology and excited about developing new
              skills.
            </p>
          </div>
        </article>
      </div>
    </>
  );
}