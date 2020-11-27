import React from 'react';
import {Link} from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface Props {
    data:any
}

export const Card: React.FC<Props> = ({data}) => {
        const route_name = data.title ? 'movies' : 'tv-shows';
        const image_url = 'https://image.tmdb.org/t/p/original/';

        return(
            <div className="card">
                <div className="h-75">
                    <LazyLoadImage src={image_url+data['backdrop_path']} alt={data.name}/>
                </div>
                <div className="h-25"><Link to={{
                    pathname:`/${route_name}/${data.id}`,
                    state:{
                        data: {data}
                    }
                }}
                ><h2>{data.name ? data.name : data.title}</h2></Link></div>
            </div>
        );
}

/*

TO DO LIST

- Create movie/tv show pages and link them to the cards         -> DONE
- Back button                                                   -> DONE
- Put images from API into cards                                -> DONE
- Make the search work                                          -> done incorrectly, gotta do it again
- Complete styling the app

- Implement lazy loading
- Write some comments
- Write the documentation - README.md
- Learn about ESLint and Enzyme
- Learn about TS - fix everything that's required 

*/