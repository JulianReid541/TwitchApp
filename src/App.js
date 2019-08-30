import React from 'react';
import { BrowserRouter as Router, 
         Route, 
         Link,
         Switch,
       } from 'react-router-dom';
import Games from './components/Games';
import Header from './components/Header';
import Stream from './components/Streams';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

function App() {
  console.log(process.env.REACT_APP_TWITCH_KEY);
  console.log(process.env.NODE_ENV);
  return (
    <Router>
      <Header />
      <Route exact path='/' component = {Games} />
      <Route exact path="/top-streams" component = {Stream} />
   </Router>
  );
}

export default App;



