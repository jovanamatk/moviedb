import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "./common/Card";

interface Props {}

export const Movies: React.FC<Props> = () => {
  const { movies } = useContext(AppContext);

  return (
    <div className="grid-container">
      {movies ? (
        movies.map((movie) => <Card data={movie} key={movie["id"]} />)
      ) : (
        <h1>Movie not found.</h1>
      )}
    </div>
  );
};
