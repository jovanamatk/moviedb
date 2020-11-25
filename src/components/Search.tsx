import React from 'react';
import searchIcon from '../etc/search.png';
interface Props {

}

export const Search: React.FC<Props> = () => {
        return(
        <div className="search">
            <img alt="Search icon" className="search-icon" src={searchIcon} />
            <input className="search-input" placeholder="Search" type="text" />
        </div>  
        );
}