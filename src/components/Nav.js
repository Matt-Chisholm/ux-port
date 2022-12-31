import React, { useContext } from "react";
import "../styles/Nav.css";
import { Context } from "../context/showContext";

export default function Nav() {
  const { home, about, projects, contact, show } = useContext(Context);
  console.log(show);

  return (
    <div className='nav-container'>
      <div className='nav-card'>
        <div onClick={() => home()}>
          <h3 className='nav-item'>Home</h3>
        </div>
        <div onClick={() => about()}>
          <h3 className='nav-item'>About</h3>
        </div>
        <h3 className='nav-item'>Projects</h3>
        <h3 className='nav-item'>Contact</h3>
      </div>
    </div>
  );
}
