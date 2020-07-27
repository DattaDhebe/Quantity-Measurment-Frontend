import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./CSS/table.scss";
import { History} from './Components/history'
import { Dashboard } from './Components/Dashboard'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Router>
      <Route exact path="/" component={Dashboard} />
      <Route  path="/quantitymeasurement/history" component={History} />
       
      </Router>
      </div>
    );
  }
}

export default App;
