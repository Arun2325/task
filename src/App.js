import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store'
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import TvShows from './Components/Tv Shows/TvShows';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home';
import Originals from './Components/Originals/Originals';


function App() {
  return (
    <Provider store={store}>
    <div>
    <Router>
      <Navbar/>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tvShows" exact component={TvShows} />
        <Route path="/originals" exact component={Originals} />

        </Switch>
      <Footer/>
    </Router>
    
    </div>
    </Provider>
  );
}

export default App;
