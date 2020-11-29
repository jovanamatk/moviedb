import React from "react";
import searchIcon from "../etc/search.png";
interface Props {
  value?: string;
  onChange?: any | undefined;
}

export const Search: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search">
      <img alt="Search icon" className="search-icon" src={searchIcon} />
      <input
        className="search-input"
        placeholder="Search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
};
