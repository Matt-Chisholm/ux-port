import React, { useContext } from "react";
import "../styles/Nav.css";

export default function Nav({ setPage }) {
  return (
    <div className='nav-container'>
      <button className='nav-button' onClick={() => setPage("home")}>
        Home
      </button>
      <button className='nav-button' onClick={() => setPage("projects")}>
        Projects
      </button>
      <button className='nav-button' onClick={() => setPage("about")}>
        About
      </button>
      <button className='nav-button' onClick={() => setPage("contact")}>
        Contact
      </button>
    </div>
  );
}
