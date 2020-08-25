import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import './App.css';

//Step 1 Build the UI to have the basic options that you need according to the 
//Step 2 Set up the states
//Step 3 set up the functions and useEffects to change the states
//Step 4 pass them to the form.js component via props
//Step 5 retrieve the propos on the form.js component and build out the ui with all the form fun stuff
//Step 6 apply the props to the form
//Step 7 Build out the routes
//Step 8 Build out the validation with yup
//Step 9 Build out the testing with cypress


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>

        <Switch>
        <Route path='/Dashboard'>
          <Dashboard/>
        </Route>
        <Route path='/Register'>
          <Register/>
        </Route>
        <Route path='/Login'>
          <Login/>
        </Route>

        </Switch>

        
      </Router>



    </div>
  );
}

export default App;
