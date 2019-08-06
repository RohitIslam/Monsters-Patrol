import React from "react";
import "./SearchBox.css";

const SearchBox = ({ placeholder, change }) => {
  return (
    <input
      className="SearchBox"
      type="search"
      placeholder={placeholder}
      onChange={change}
    />
  );
};

export default SearchBox;
