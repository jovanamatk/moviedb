import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { TvShows } from './components/TvShows';
import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

function App() {
  return (
    <div className="container">
    <Navbar/>
    <Search/>
    <Switch>
      <Route path="/tv-shows" exact component={TvShows} />
      <Route path="/movies" exact component={Movies} />
      <Redirect from="/" to="/tv-shows"/>
      <Redirect to="/"/>
    </Switch>

    </div>
  );
}

export default App;
