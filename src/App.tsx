import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { TvShows } from './components/TvShows';
import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import Axios from 'axios';
import { Item } from './components/common/Item';

export const AppContext = React.createContext({ movies: [] as Movies[], tvShows: [] as TvShows[]});

interface Movies {
  title:string
}

interface TvShows {
  name:string
}

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [tvShows, setTvShows] = useState<TvShows[]>([]);
  const [search, setSearch] = useState('');

useEffect(() => {
  Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setMovies(response.data.results.slice(0,10) as Movies[]))
  Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setTvShows(response.data.results.slice(0,10) as TvShows[]))
}, []);

  let handleSearch = query => {
    setSearch(query);
  }

  let getData = (data:any, parameter:string) => {
    let filtered;
    if (search && data) {
      filtered = data.filter(item => item[parameter].toLowerCase().startsWith(search.toLowerCase()))
    }
     
    return filtered;
  }

  return (
    <AppContext.Provider value={getData(movies, 'title') ? {movies:getData(movies, 'title'), tvShows:getData(tvShows, 'name')} : {movies: movies,tvShows:tvShows }}>

    <div className="container">
    <Navbar/>
    <Search value={search} onChange={handleSearch}/>
    <Switch>
      <Route path="/movies/:id" component={Item} />
      <Route path="/movies" component={Movies} />
      <Route path="/tv-shows" component={TvShows} />
      <Redirect from="/" to="/tv-shows"/>
      <Redirect to="/"/>
    </Switch>

    </div>
    </AppContext.Provider>
  );
}

export default App;
