import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import ControlDepartment from './components/ControlDepartment';
import ControlLocation from './components/ControlLocation';
import ControlEmployee from './components/ControlEmployees';
import ControlDependent from './components/ControlDependent';
import ControlJob from './components/ControlJobs';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = '/' exact component= {Login}></Route>
          <Route path = '/home' exact component = {Home}></Route>
          <Route path = '/departments' exact component = {ControlDepartment}></Route>
          <Route path = '/locations' exact component = {ControlLocation}></Route>
          <Route path = '/employees' exact component = {ControlEmployee}></Route>
          <Route path = '/jobs' exact component = {ControlJob}></Route>
          <Route path = '/dependents' exact component = {ControlDependent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
