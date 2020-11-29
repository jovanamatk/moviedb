import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  value?: string;
  onChange?: any | undefined;
}

export const Search: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="search">
      <FontAwesomeIcon className="search-icon" icon={faSearch} />
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
