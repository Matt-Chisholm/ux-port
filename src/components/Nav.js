import React from "react";
import "../styles/Nav.css";

export default function Nav({ setPage }) {
  return (
    <div className='nav-container'>
      <button className='button-48' onClick={() => setPage("home")}>
        <span className='text'>Home</span>
      </button>
      <button className='button-48' onClick={() => setPage("projects")}>
        <span className='text'>Projects</span>
      </button>
      <button className='button-48' onClick={() => setPage("about")}>
        <span className='text'>About</span>
      </button>
      <button className='button-48' onClick={() => setPage("contact")}>
        <span className='text'>Contact</span>
      </button>
    </div>
  );
}
