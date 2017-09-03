import React from 'react';

export default function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input placeholder="Search..."
        onChange={(e) => props.onFilterTextChange(e.target.value)}
        value={props.filterText}
        />
      <br/>
      <input id="inStock" type="checkbox"/>&nbsp;
      <label htmlFor="inStock">Only show items in stock</label>
    </div>
  );
};
