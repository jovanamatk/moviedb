import React from 'react';
import { NavLink } from "react-router-dom";

interface Props {

}

export const Navbar: React.FC<Props> = () => {
        return( <>
            <NavLink to="/tv-shows">TV Shows</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            </>
        );
}