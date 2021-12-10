import React from 'react';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import SlideLayout from './Components/Slider/SlideLayout';
import TvShows from './Components/Tv Shows/TvShows';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
    <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tvShows" exact component={TvShows} />
        </Switch>
      <Footer/>
    </Router>
    
    </div>
  );
}

export default App;
