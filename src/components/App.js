import "../styles/App.css";
import Nav from "./Nav";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";
import Home from "./Home";
import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("home");
  console.log(page);

  return (
    <div className='main-container'>
      <div className='main-card'>
        <Nav setPage={setPage} />
      </div>
    </div>
  );
}

export default App;
