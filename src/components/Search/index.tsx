import React from 'react';
import './style.css';
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <>
      <input className='input-search' type="search" placeholder='Search' />
      {/* <CiSearch className='icon' /> */}
    </>
  )
}

export default Search;