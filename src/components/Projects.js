import React from "react";
import "../styles/Projects.css";
import Tetris from "../assets/tetris.png";

export default function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='header'>Some projects i've been working on</h1>
      <div className='projects'>
        <div className='project'>
          <h2 className='project-title'>Tracks App</h2>
          <img
            src='https://res.cloudinary.com/practicaldev/image/fetch/s--ddI1JvRj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://www.pubnub.com/wp-content/uploads/2019/06/Screen-Shot-2019-06-26-at-1.30.38-PM.png%2522'
            alt='Tracks App Demo'
            className='project-image'
          />
          <a
            href='https://github.com/Matt-Chisholm/Track-App'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
          <p className='project-description'>
            A mobile app for users to track their paths when on hikes, bikerides
            or roadtrips. The app is built with React Native, Expo CLI, Axios
            and a MongoDB database.
          </p>
        </div>
        <div className='chatbot project'>
          <h2 className='project-title'>React Tetris</h2>
          <img src={Tetris} alt='Chatbot Pic' className='project-image' />
          <a
            href='https://github.com/Matt-Chisholm/react-tetris'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
          <p className='project-description'>
            A working tetris game in the browser built with React, custom hooks
            and Styled Components.
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
          <a
            href='https://github.com/Matt-Chisholm/Paw-Five'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
          <p className='project-description'>
            PAWFIVE is a specialized training app for dogs, supported by their
            owners, to track their skill progressions and sessions, while aided
            by voice recognition features. The app is built with React, Express,
            Bootstrap, Axios and a voice recognition API called Wit.ai.
          </p>
        </div>
      </div>
    </div>
  );
}
