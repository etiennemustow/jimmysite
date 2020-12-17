import React, { useState } from "react"


function NavBar({art_assisting, production_design, render_art}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <a className="navbar-brand" href="/">Jimmy Van Twest | Art Department</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" id={art_assisting} href="/art_assisting">Art Assisting</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id={production_design} href="/production_design">Production Design</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id ={render_art} href="/render_art">Render Art</a>
            </li>
          </ul>
    </div>
  </nav>
    )
  }
export default NavBar;