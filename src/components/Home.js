import React, { useState } from "react";
import "../styles/Home.css";

export default function Home() {
  const words = [
    "web developer",
    "front-end developer",
    "software engineer",
    "nerd",
  ];
  const [word, setWord] = React.useState(words[0]);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setWord(words[index]);
      setIndex((index + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className='home-container'>
      <div className='home-text'>
        <h1>
          Hi, I'm <span className='name'>Matt</span>.
        </h1>
        <h2>
          I'm a <span className='job'>{word}</span>.
        </h2>
      </div>
    </div>
  );
}
