import React, { useEffect, useState } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import Axios from "axios";
import { TvShows } from "./components/TvShows";
import { Movies } from "./components/Movies";
import { Navbar } from "./components/Navbar";
import { Search } from "./components/Search";
import { Item } from "./components/common/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

interface MoviesInterface {
  title: string;
}
interface TvShowsInterface {
  name: string;
}

/*
  Movies and TV Shows arrays are located in the global state
*/
export const AppContext = React.createContext({
  movies: [] as MoviesInterface[],
  tvShows: [] as TvShowsInterface[],
});

function App() {
  /*
    Local state definitions
  */
  const [movies, setMovies] = useState<MoviesInterface[]>([]);
  const [tvShows, setTvShows] = useState<TvShowsInterface[]>([]);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState<
    MoviesInterface[] | TvShowsInterface[] | any
  >([]);
  const [filteredTvShows, setFilteredTvShows] = useState<
    MoviesInterface[] | TvShowsInterface[] | any
  >([]);

  // useEffect hooks help us send GET requests to the server and save the response data in the state
  useEffect(() => {
    Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=810f591d016b0a00f63dda22f0ca7d52"
    ).then((response) =>
      setMovies(response.data.results.slice(0, 10) as MoviesInterface[])
    );
    Axios.get(
      "https://api.themoviedb.org/3/tv/popular?api_key=810f591d016b0a00f63dda22f0ca7d52"
    ).then((response) =>
      setTvShows(response.data.results.slice(0, 10) as TvShowsInterface[])
    );
  }, []);

  useEffect(() => {
    // If there are more than 3 characters, send the GET request
    if (search.length >= 3) {
      setTimeout(() => {
        Axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=810f591d016b0a00f63dda22f0ca7d52&query=${search}&page=1&include_adult=false`
        ).then((response) =>
          setFilteredMovies(response.data.results.slice(0, 10))
        );
        Axios.get(
          `https://api.themoviedb.org/3/search/tv?api_key=810f591d016b0a00f63dda22f0ca7d52&query=${search}&page=1&include_adult=false`
        ).then((response) =>
          setFilteredTvShows(response.data.results.slice(0, 10))
        );
      }, 1000);
    } else {
      setFilteredMovies(movies);
      setFilteredTvShows(tvShows);
    }
  }, [search, movies, tvShows]);

  // Saves the current search query to the state
  let handleSearch = (query: string) => {
    setSearch(query);
  };

  const history = useHistory();
  const location = useLocation();

  // If the user is viewing details page, header area will be hidden
  let hideHeader = () => {
    if (
      location.pathname.startsWith("/movies/") ||
      location.pathname.startsWith("/tv-shows/")
    )
      return true;
  };

  return (
    <AppContext.Provider
      value={
        search
          ? { movies: filteredMovies, tvShows: filteredTvShows }
          : { movies: movies, tvShows: tvShows }
      }
    >
      <div className="container">
        {hideHeader() ? (
          <div className="btn-primary" onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faAngleLeft} /> Back
          </div>
        ) : (
          <>
            <Navbar /> <Search value={search} onChange={handleSearch} />
          </>
        )}
        <Switch>
          <Route path="/movies/:id" component={Item} />
          <Route path="/movies" component={Movies} />
          <Route path="/tv-shows/:id" component={Item} />
          <Route path="/tv-shows" component={TvShows} />
          <Redirect from="/" to="/tv-shows" />
          <Redirect to="/" />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
