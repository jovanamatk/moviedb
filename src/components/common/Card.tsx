import React from 'react';

interface Props {
    name:any
}

export const Card: React.FC<Props> = ({name}) => {
    
        return(
            <div className="card">
                <div className="h-75"></div>
                <div className="h-25"><h2>{name}</h2></div>
            </div>
        );
}