import React from 'react';

interface Props {

}

export const Card: React.FC<Props> = () => {
        return(
            <div className="card">
                <div className="h-75"></div>
                <div className="h-25"><h1>Movie Title</h1></div>
            </div>
        );
}