import React, { useContext } from "react";
import "../styles/Nav.css";
import { Context } from "../context/showContext";

export default function Nav() {
  const { home, about, projects, contact, show } = useContext(Context);
  console.log(show);

  return (
    <div className='nav-container'>
      <button onClick={() => home()} className='nav-item'>
        Home
      </button>
      <button onClick={() => about()} className='nav-item'>
        About
      </button>
      <h3 className='nav-item'>Projects</h3>
      <h3 className='nav-item'>Contact</h3>
    </div>
  );
}
