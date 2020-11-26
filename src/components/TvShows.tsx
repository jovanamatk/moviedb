import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Card } from './common/Card';

interface Props {

}


export const TvShows: React.FC<Props> = () => {
    const { tvShows } = useContext(AppContext);

        return(
            <div className="grid-container">
                { tvShows.length !== 0 ? tvShows.map(movie => <Card data={movie} key={movie['id']} name={movie['name']} / >)  : <h1>Movie not found.</h1>}

            </div>
        );
}