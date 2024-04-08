import React from "react";
import MySel from "./UI/select/MySel";
import MyInp from "./UI/input/MyInp";
import PropTypes from 'prop-types';

const PostFilter = function({filter, setFilter}){
  const opt = [
    {value: "title", name: "By Names"},
    {value: "body", name: "By Body"},
  ]

  return(
    <div>
      <MyInp 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Search Word"
        />
        <MySel 
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          default={"choose"} opt={opt}
        />
    </div>
  );
}

PostFilter.propTypes = {
  filter: PropTypes.object,
  setFilter: PropTypes.func
};

export default PostFilter;