import React, { Component } from 'react';
import Navbar from './Components/components/Navbar';
import Home from './Components/Pages/Home/Home'
import Projects from './Components/Pages/Project/Projects'
import About from './Components/Pages/About/About'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path = "/about" component = {About} />
          </Switch>

        </div>
      </Router>
    )
  }
}

export default App;
