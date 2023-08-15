import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export default function AboutMe({ aboutMe }) {
  const image = useRef(null);
  const tl = gsap.timeline();

  useEffect(() => {
    tl.to('.about-me-image', {
      x: 600,

      scrollTrigger: {
        trigger: '.about-me-image',
        start: '20px 80%',
        end: 'top 30%',
        scrub: 1,
      },
    });
  }, []);

  return (
    <>
      <div className="spacer" ref={aboutMe}></div>

      <div className="about-me">
        <h2>ABOUT ME</h2>
        <div className="long-line-div"></div>
        <article className="about-me-article">
          <div className="about-me-image" ref={image}>
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
