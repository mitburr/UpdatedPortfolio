import React, { Component } from 'react';
import Navbar from './Components/components/Navbar';
import Home from './Components/Pages/Home'
import Projects from './Components/Pages/Projects'
import { Router, Route, Switch } from "react-router";
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
     <Navbar />
     <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
        </Switch>

     </div>
    )
  }
}

export default App;
