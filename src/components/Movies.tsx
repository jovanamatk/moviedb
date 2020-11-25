import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Card } from './common/Card';

interface Props {

}


export const Movies: React.FC<Props> = () => {
    const { movies } = useContext(AppContext);

        return(
            <div className="grid-container">
                
                { movies.map(movie => <Card key={movie['id']} name={movie['title']} / >
                )}
            </div>
        );
}