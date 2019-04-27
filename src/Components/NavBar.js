import React from 'react'

const NavBar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark avbar-expand-lg top">
        <a href="#intro" className="navbar-brand">Web Developer</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <a className="nav-item nav-link " href="#about">About Me</a>
            <a className="nav-item nav-link " href="#portfolio" >Portfolio</a>
            <a className="nav-item nav-link " href="#contact" >Contact</a>
          </ul>
        </div>
      </nav>
    </header>
   
  )
}

export default NavBar;
