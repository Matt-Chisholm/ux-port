import React from "react";
import "../styles/Nav.css";

export default function Nav() {
  return (
    <div className='nav-container'>
      <div className='nav-card'>
        <h3 className='nav-item'>Home</h3>
        <h3 className='nav-item'>About</h3>
        <h3 className='nav-item'>Projects</h3>
        <h3 className='nav-item'>Contact</h3>
      </div>
    </div>
  );
}
