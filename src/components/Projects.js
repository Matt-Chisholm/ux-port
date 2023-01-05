import React from "react";
import "../styles/Projects.css";

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
          <p className='project-description'>
            A mobile app for users to track their paths when on hikes, bikerides
            or roadtrips. The app is built with React Native, Expo CLI, Axios
            and a MongoDB database.
          </p>
          <a
            href='https://github.com/Matt-Chisholm/Track-App'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
        </div>
        <div className='project'>
          <h2 className='project-title'>React Chatbot</h2>
          <img
            src='https://attachment.outlook.live.net/owa/MSA%3Amathesonchisholm%40hotmail.com/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATYwMAItY2IyZC00OWU0LTAwAi0wMAoARgAAA213QDRe51BKq13MP2RhVbQHAJV78GaXYNNBi%2BYWm7g6kXIAAAIBDAAAAJV78GaXYNNBi%2BYWm7g6kXIABva22GMAAAABEgAQAKXqwngFr1pFqEX8l5l8iZM%3D&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ4OThGN0RDMjk2ODQ1MDk1RUUwREZGQ0MzODBBOTM5NjUwNDNFNjQiLCJ0eXAiOiJKV1QiLCJ4NXQiOiIySmozM0Nsb1JRbGU0Tl84dzRDcE9XVUVQbVEifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6IjM4MDllN2U0YmIwNjQyMDQ4ZDQ1NzIwMDkwNDUwNDU2IiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiU0lQIiwiYXBwY3R4Ijoie1wibXNleGNocHJvdFwiOlwib3dhXCIsXCJwdWlkXCI6XCIxNjg4ODUzMjY5MDA2ODIwXCIsXCJzY29wZVwiOlwiT3dhRG93bmxvYWRcIixcIm9pZFwiOlwiMDAwNjAwMDAtY2IyZC00OWU0LTAwMDAtMDAwMDAwMDAwMDAwXCIsXCJwcmltYXJ5c2lkXCI6XCJTLTEtMjgyNy0zOTMyMTYtMzQwODc0Mjg4NFwifSIsIm5iZiI6MTY3Mjk0ODI5NywiZXhwIjoxNjcyOTQ4ODk3LCJpc3MiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBAODRkZjllN2YtZTlmNi00MGFmLWI0MzUtYWFhYWFhYWFhYWFhIiwiYXVkIjoiMDAwMDAwMDItMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2F0dGFjaG1lbnQub3V0bG9vay5saXZlLm5ldEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJoYXBwIjoib3dhIn0.o9i9C9Bjh8u9yeDfElLxy2ooywjqgTm44acbZMJdReFsgbLzLzgLIwQdTrWgNRfj8Z9T_dGxgNg6cJ6UUJjvFqf62QPLkLOegQwrM2Q3IqHKcLMI2lNMmLj_MXq8Wi5KUQA3YRo1LKxz2Vv3aPT2lxRv33bkeBJbz2BzQJ3mwA2NWdJwXgGOSdps7fjMin9iSF75B3NNyklomb-gM6db40wEWn-kpgd1nawtpI6i6lphQ9fw7e1lb3Y3K8ymU2aw8YM9foom3rYAg0m2ArSBY6QQhpk7ZliDW7t_u8vlUJtAa90j7eLcUfBw5IgX_8h7G0HSnXOd7evSPRCvHRImVA&X-OWA-CANARY=IGkVEUm-6Ui2zF6Cb7tQpSBHOVdW79oYT6W9l9__VACNLvxCpNPs-76hY86M062nzJpQZgLsSJM.&owa=outlook.live.com&scriptVer=20221209009.13&animation=true'
            alt='Paw-Five Demo'
            className='project-image'
          />
          <p className='project-description'>
            A fun chatbot, built with React, that can answer questions about
            relevant coding topics. (Non-ML bot)
          </p>
          <a
            href='https://github.com/Matt-Chisholm/chatbot-react'
            target='_blank'
            rel='noopener noreferrer'>
            <button className='project-button'>Github</button>
          </a>
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
