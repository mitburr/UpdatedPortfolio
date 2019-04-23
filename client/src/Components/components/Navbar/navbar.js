import React from "react"
import "./navbar.css"

let Navbar = function(){
return (<nav className="navbar navbar-expand-lg navbar-light">
    <a className="navbar-brand" >Menu</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">About Me</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li> */}
      </ul>
    </div>
  </nav>);
}

export default Navbar;

