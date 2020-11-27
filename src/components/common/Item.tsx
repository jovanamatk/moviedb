import * as React from 'react';
import { useLocation } from 'react-router';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Item: React.FC = () => {
    try {
    const location = useLocation();
    const image_url = 'https://image.tmdb.org/t/p/original/';

    const {data} = (location.state as any);
    let item=data.data;

        return(<div>
            <LazyLoadImage className="cover-img" src={image_url+item.backdrop_path} alt={data.name}/>

            <h1>{item.title ? item.title : item.name}</h1>
            <p>{item.overview}</p>
        </div>);
    }
    catch {
        return <h1>Movie does not exist.</h1>
    }
}