import React from 'react';
import { BrowserRouter as Router, 
         Route, 
         Link,
         Switch,
       } from 'react-router-dom';
import Games from './components/Games';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  return (
    <Router>
       
      <Route exact path='/' component = {Games} />
   </Router>
  );
}

export default App;



