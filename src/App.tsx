import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { TvShows } from './components/TvShows';
import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import Axios from 'axios';

export const AppContext = React.createContext({ movies: [], tvShows: [] });

function App() {
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

useEffect(() => {
  Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setMovies(response.data.results))
}, []);
useEffect(() => {
  Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setTvShows(response.data.results))
}, []);
  

  return (
    <AppContext.Provider value={{movies:movies.slice(0,10), tvShows:tvShows.slice(0,10)}}>

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
    </AppContext.Provider>
  );
}

export default App;
