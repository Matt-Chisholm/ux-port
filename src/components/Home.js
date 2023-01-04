import React from "react";
import "../styles/Home.css";

export default function Home() {
  const words = [
    "a web developer",
    "a front-end developer",
    "a software engineer",
    "always learning",
    "a nerd",
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
      <div className='text-container'>
        <div className='name-container'>
          <h1 className='name-h1'>
            Hi, I'm <span className='name'>Matt</span>.
          </h1>
          <img
            className='logo'
            alt=''
            src='https://img.icons8.com/clouds/200/000000/react.png'
          />
          <img
            className='logo'
            alt=''
            src='https://img.icons8.com/fluency/200/000000/typescript--v1.png'
          />
          <img
            className='logo'
            alt=''
            src='https://img.icons8.com/fluency/200/000000/javascript.png'
          />
          <img
            className='logo'
            alt=''
            src='https://img.icons8.com/color/200/000000/nodejs.png'
          />
        </div>
        <div className='carousel-container'>
          <h2 className='scroller'>
            I'm <span className='job'>{word}</span>.
          </h2>
        </div>
      </div>
    </div>
  );
}
