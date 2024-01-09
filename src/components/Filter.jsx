import React from "react";

function Filter({ filterKeywords, setFilterKeywords, removeKeyword }) {
  return (
    <div className="fiter">
      <div className="filtered-btn">
        {filterKeywords.map((keys) => {
          return (
            <div className="filter-btns">
              <button className="btn">{keys}</button>
              <button className="close" onClick={() => removeKeyword(keys)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={() => setFilterKeywords([])} className="clear">clear</button>
    </div>
  );
}

export default Filter;
