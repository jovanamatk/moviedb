import React, { useContext } from 'react';
import { AppContext } from '../App';
import { Card } from './common/Card';

interface Props {

}


export const TvShows: React.FC<Props> = () => {
    const { tvShows } = useContext(AppContext);

        return(
            <div className="grid-container">
                { tvShows.map(show => <Card key={show['id']} name={show['name']} / >
                )}
            </div>
        );
}