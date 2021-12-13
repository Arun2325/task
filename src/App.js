import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Originals from './Components/Originals/Originals';
import Sports from './Components/Sports/Sports';
import Movies from './Components/Movie/Movies';
import Premium from './Components/Premium/Premium';
import Games from './Components/Game/Games';
import TvShows from './Components/TvShows/TvShows';


function App() {
  return (
    <Provider store={store}>
    <div>
    <Router>
      <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tvShows"  component={TvShows} />
          <Route path="/originals" component={Originals} />
          <Route path="/sports" component={Sports} />
          <Route path="/movie"  component={Movies} />
          <Route path="/premium"  component={Premium} />
          <Route path="/games"  component={Games} />
        </Switch>
      <Footer/>
    </Router>
    
    </div>
    </Provider>
  );
}

export default App;
