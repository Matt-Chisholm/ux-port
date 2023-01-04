import "../styles/App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import Projects from "./Projects";
import Home from "./Home";
import About from "./About";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  console.log(page);

  return (
    <div className='main-container'>
      <div className='main-card'>
        <Nav setPage={setPage} page={page} />
        {page === "home" && <Home page={page} setPage={setPage} />}
        {page === "projects" && <Projects />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;
