import React, { useContext } from 'react';
import {Link} from 'react-router-dom'
import { AppContext } from '../../App';

interface Props {
    name:any,
    data:any
}

export const Card: React.FC<Props> = ({name,data}) => {

        return(
            <div className="card">
                <div className="h-75"></div>
                <div className="h-25"><Link to={{
                    pathname:`/movies/${data.id}`,
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

- Put images from API into cards
- Create movie/tv show pages and link them to the cards
- Back button
- Make the search work
- Learn about TS - fix everything that's required 
- Learn about ESLint and Enzyme
- Write some comments about the code
- Write the documentation - README.md

*/