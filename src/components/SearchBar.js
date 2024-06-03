import React from "react";

function SearchBar(props) {
  function handleChange(e) {
    props.setSearchValue(e.target.value);
  }

  return (
    <input
      className="search-input"
      value={props.value}
      type="text"
      placeholder="Type to search..."
      onChange={handleChange}
    />
  );
}

export default SearchBar;
