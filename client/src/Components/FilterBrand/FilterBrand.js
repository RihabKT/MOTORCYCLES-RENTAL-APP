import React from 'react';
import "./FilterBrand.css";

const FilterBrand = (props) => {
  return (
    <div style={{cursor:"pointer"}}>
        <input className='filterinput' type="text" placeholder='SEARCH FOR MOTORCYCLES BRAND...'
        onChange={(e) => props.setFilterByBrand(e.target.value)}  />
    </div>
  )
}

export default FilterBrand