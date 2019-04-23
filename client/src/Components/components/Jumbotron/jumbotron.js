import React from 'react'
import resume from '../../../Assets/Resume/MJB_Resume_v4.1.pdf'

let Navbar = function(props){


return(

  <div className="row">
    <div className="container-fluid">
      <div className="jumbotron">
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">{props.lead}</p>
        <hr className="my-2"/>
        <p>{props.gate}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="projects" role="button" id = "projectButton">Projects</a>
          <a className="btn btn-primary btn-lg" href={resume} role="button" id = "projectButton" target = "_blank">Resume</a>
        </p>
      </div>
    </div>
  </div>

)}

export default Navbar;