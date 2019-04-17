import React from 'react'

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
        </p>
      </div>
    </div>
  </div>

)}

export default Navbar;