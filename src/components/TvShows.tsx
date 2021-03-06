import React, { useContext } from "react";
import { AppContext } from "../App";
import { Card } from "./common/Card";

interface Props {}

export const TvShows: React.FC<Props> = () => {
  const { tvShows } = useContext(AppContext);

  return (
    <div className="grid-container">
      {tvShows.map((movie) => (
        <Card data={movie} key={movie["id"]} />
      ))}
    </div>
  );
};
