import React from "react";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='header'>Some projects i've been working on</h1>
      <div className='projects'>
        <div className='project'>
          <h2 className='project-title'>Project 1</h2>
          <p className='project-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, quae voluptatibus voluptatem quidem
            necessitatibus voluptas quibusdam quos nesciunt. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
        </div>
        <div className='project'>
          <h2 className='project-title'>Project 2</h2>
          <p className='project-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, quae voluptatibus voluptatem quidem
            necessitatibus voluptas quibusdam quos nesciunt. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
        </div>
        <div className='project'>
          <h2 className='project-title'>Paw-Five</h2>
          <img
            src='https://github.com/Matt-Chisholm/Paw-Five/raw/master/docs/readme.md/home.gif?raw=true'
            alt='Paw-Five
            Demo'
            className='project-image'
          />
          <p className='project-description'>
            PAWFIVE is a specialized training app for dogs, supported by their
            owners, to track their skill progressions and sessions, while aided
            by voice recognition features. The app is built with React, Express,
            Bootstrap, Axios and a voice recognition API called Wit.ai.
          </p>
          <a
            href='https://github.com/Matt-Chisholm/Paw-Five'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
        </div>
      </div>
    </div>
  );
}
