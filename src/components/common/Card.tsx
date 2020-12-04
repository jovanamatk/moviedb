import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface Props {
  data: any;
}

export const Card: React.FC<Props> = ({ data }) => {
  /*
    If passed data has a title property, it is certain that it is a movie. 
    Otherwise, it has a name property and it is a TV Show.
  */
  const route_name = data.title ? "movies" : "tv-shows";
  const image_url = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="card">
      <div className="h-75">
        <Link
          to={{
            pathname: `/${route_name}/${data.id}`,
            state: {
              data: { data },
            },
          }}
        >
          <LazyLoadImage
            src={
              data["backdrop_path"]
                ? image_url + data["backdrop_path"]
                : image_url + data["poster_path"]
            }
            alt={data.name}
          />
        </Link>
      </div>
      <div className="h-25">
        <h2>
          <Link
            to={{
              pathname: `/${route_name}/${data.id}`,
              state: {
                data: { data },
              },
            }}
          >
            {data.name ? data.name : data.title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

