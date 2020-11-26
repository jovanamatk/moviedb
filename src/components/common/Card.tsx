import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AppContext } from '../../App';

interface Props {
    name:any,
    data:any
}

export const Card: React.FC<Props> = ({name,data}) => {
        let route_name = data.title ? 'movies' : 'tv-shows';
        return(
            <div className="card">
                <div className="h-75"></div>
                <div className="h-25"><Link to={{
                    pathname:`/${route_name}/${data.id}`,
                    state:{
                        data: {data}
                    }
                }}
                ><h2>{name}</h2></Link></div>
            </div>
        );
}

/*

TO DO LIST

- Create movie/tv show pages and link them to the cards         -> DONE
- Back button                                                   -> DONE
- Put images from API into cards
- Make the search work                                          -> done incorrectly, gotta do it again
- Complete styling the app

- Learn about TS - fix everything that's required 
- Learn about ESLint and Enzyme
- Write some comments about the code
- Write the documentation - README.md

*/