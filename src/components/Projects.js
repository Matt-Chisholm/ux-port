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
          <h2 className='project-title'>Project 3</h2>
          <p className='project-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, quae voluptatibus voluptatem quidem
            necessitatibus voluptas quibusdam quos nesciunt. Quisquam, quae
            voluptates. Quisquam, quae voluptates. Quisquam, quae voluptates.
          </p>
        </div>
      </div>
    </div>
  );
}
