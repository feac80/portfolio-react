import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar bg-dark navbar-dark navbar-expand-lg fixed-top">
        <Link to="/" className="navbar-brand">Web Developer</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <Link className="nav-item nav-link " to="/about">About Me</Link>
            <Link className="nav-item nav-link " to="/portfolio" >Portfolio</Link>
            <Link className="nav-item nav-link " to="/contact" >Contact</Link>
          </ul>
        </div>
      </nav>
    </header>
   
  )
}

export default NavBar;
