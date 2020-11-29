import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "./common/Card";

interface Props {}

export const TvShows: React.FC<Props> = () => {
  const { tvShows } = useContext(AppContext);

  return (
    <div className="grid-container">
      {tvShows ? (
        tvShows.map((movie) => <Card data={movie} key={movie["id"]} />)
      ) : (
        <h1>TV Show not found.</h1>
      )}
    </div>
  );
};
