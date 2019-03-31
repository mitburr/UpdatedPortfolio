import React from 'react'

let Navbar = function(){


return(

  <div class="row">
    <div class="container-fluid">
      <div class="jumbotron">
        <h1 class="display-3">Hi, I'm Mitch</h1>
        <p class="lead">I'm a full stack web developer with an eye for design and strong analytical skills.</p>
        <hr class="my-2"/>
        <p>Please feel free to browse my work.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="projects.html" role="button" id = "projectButton">Projects</a>
        </p>
      </div>
    </div>
  </div>

)}

export default Navbar;