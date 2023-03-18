import React from "react";

const Filter = (props) => {
  return (
    <div className="px-5 mx-5 my-2">
      <select
        className="form-control"
        onChange={(event) => props.setFilter(event.target.value)}
      >
        <option value="">All</option>
        {props.catagory.map((c) => {
          return (
            <option key={c} value={c}>
              {c}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
