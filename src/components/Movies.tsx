import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "./common/Card";

interface Props {}

export const Movies: React.FC<Props> = () => {
  // Destructuring the variable 'movies' from the Context
  const { movies } = useContext(AppContext);

  return (
    <div className="grid-container">
      {movies.map((movie) => (
        <Card data={movie} key={movie["id"]} />
      ))}
    </div>
  );
};
