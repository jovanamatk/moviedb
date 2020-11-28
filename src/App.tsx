import React, { useEffect, useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from "react-router-dom";
import { TvShows } from './components/TvShows';
import { Movies } from './components/Movies';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import Axios from 'axios';
import { Item } from './components/common/Item';
import { useHistory, useLocation } from 'react-router';

interface Movies {
  title:string
}

interface TvShows {
  name:string
}
export const AppContext = React.createContext({ movies: [] as Movies[], tvShows: [] as TvShows[] });

function App() {
  const [movies, setMovies] = useState<Movies[]>([]);
  const [tvShows, setTvShows] = useState<TvShows[]>([]);
  const [search, setSearch] = useState('');
  const [filtered, setFiltered] = useState<Movies[] | TvShows[] | any>([]);

useEffect(() => {
  Axios.get('https://api.themoviedb.org/3/movie/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setMovies(response.data.results.slice(0,10) as Movies[]))
  Axios.get('https://api.themoviedb.org/3/tv/popular?api_key=810f591d016b0a00f63dda22f0ca7d52').then(response => setTvShows(response.data.results.slice(0,10) as TvShows[]))
}, []);

  let handleSearch = (query:string) => {
    setSearch(query);
  }



  let getData = (search:string, data:any) => {
    if (search && search.length >= 3) {
      setTimeout(() => {
        if (data.title)
          Axios.get(`https://api.themoviedb.org/3/search/movie?api_key=810f591d016b0a00f63dda22f0ca7d52&query=${search}&page=1&include_adult=false`).then(response => setFiltered(response.data.results.slice(0,10)))
        else
          Axios.get(`https://api.themoviedb.org/3/search/tv?api_key=810f591d016b0a00f63dda22f0ca7d52&query=${search}&page=1&include_adult=false`).then(response => setFiltered(response.data.results.slice(0,10)))

      }, 1000);
      }
      else if (search.length < 3) {
        if (data[0].title) 
        return movies;

        return tvShows;
      }
      return filtered;
    
  }

  const history = useHistory();
  const location = useLocation();

  let hideHeader = () => {
    if (location.pathname.startsWith('/movies/') || location.pathname.startsWith('/tv-shows/'))
    return true;          
  }

  return (
    <AppContext.Provider value={search ? {movies:getData(search, movies), tvShows:getData(search, tvShows)} : {movies: movies,tvShows:tvShows }}>

    <div className="container">
      {
      hideHeader() 
      ? 
      <button onClick={() => history.goBack()}><h2>Back</h2></button> 
      : 
      <><Navbar/> <Search value={search} onChange={handleSearch}/></> 
      }
    <Switch>
      <Route path="/movies/:id" component={Item} />
      <Route path="/movies" component={Movies} />
      <Route path="/tv-shows/:id" component={Item} />
      <Route path="/tv-shows" component={TvShows} />
      <Redirect from="/" to="/tv-shows"/>
      <Redirect to="/"/>
    </Switch>
    </div>
    </AppContext.Provider>
  );
}

export default App;
