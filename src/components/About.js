import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className='about-container'>
      <div className='about-card'>
        <div className='about-text'>
          <h1 className='about-h1'>About Me</h1>
          <p className='about-p'>
            I am a full-stack web developer with a current focus on front-end.
            <br />
            I am currently working mostly in React, React Native and learning
            the art of Typescript.
            <br />
            I am as of now involved in several open-source and volunteer
            projects, but am always looking for more.
            <br />
            I am a graduate of Lighthouse Labs Web Development Bootcamp, and am
            constantly upskilling.
            <br />
            Although I am currently focused on honing my front-end skills, I
            also enjoy getting involved in design and back-end development..
            <br />
            I am a lifelong learner, and am always looking for new challenges.
            <br />
          </p>
        </div>
        <div className='btn-container'>
          <a
            href='https://github.com/Matt-Chisholm'
            target='_blank'
            rel='noreferrer'>
            <button className='github-btn'>GitHub</button>
          </a>
          <a
            href='https://www.linkedin.com/in/matt-chisholm10/'
            target='_blank'
            rel='noreferrer'>
            <button className='github-btn'>LinkedIn</button>
          </a>
        </div>
      </div>
    </div>
  );
}
