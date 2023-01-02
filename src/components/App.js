import "../styles/App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import { Context } from "../context/showContext";
import React, { useContext } from "react";

function App() {
  const { show } = useContext(Context);

  return (
    <div className='main-container'>
      <div className='main-card'>
        <Nav />
        {show === "home" && <Home />}
        {show === "about" && <About />}
        {show === "projects" && <Projects />}
        {show === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
