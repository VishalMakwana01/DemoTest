import React from 'react';
import './App.css';
import Admin from "./components/admin"
import Form from './components/form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Form}></Route>
        <Route path="/admin" component={Admin}></Route>
      </Router>
    </>
  );
}

export default App;
