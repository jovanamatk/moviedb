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