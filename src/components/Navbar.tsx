import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}

export const Navbar: React.FC<Props> = () => {
  return (
    <div className="navbar">
      <NavLink className="navbar--item" to="/movies">
        Movies
      </NavLink>
      <NavLink className="navbar--item" to="/tv-shows">
        TV Shows
      </NavLink>
    </div>
  );
};
