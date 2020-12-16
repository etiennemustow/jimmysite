import React, { useState } from "react"


function NavBar({art_assisting, production_design, render_art}) {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="/">Jimmy Van Twest | Art Department</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" id={art_assisting} href="/art_assisting">Art Assisting</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id={production_design} href="/production_design">Production Design</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id ={render_art} href="/render_art">Render Art</a>
            </li>
          </ul>
    </div>
  </nav>
    )
  }
export default NavBar;