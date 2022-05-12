import React from 'react';
import "./FilterAvailable.css";


const FilterAvailable = ({showAvailable, setshowAvailable}) => {
  return (
    <div style={{cursor:"pointer"}}>
        {/* <button className="searchAvailable" onClick={()=>setshowAvailable(!showAvailable)}> {showAvailable?  "HIDE AVAILABLE MOTORCYCLES" : " SHOW AVAILABLE MOTORCYCLES"} </button> */}
        <input type="checkbox" className='filtercheckbox'  onClick={()=>setshowAvailable(!showAvailable)} />
        <label className="checkAvailable" >{showAvailable?  "AVAILABLE MOTORCYCLES:" : " UNAVAILABLE MOTORCYCLES: "} </label> 
    </div>
  )
}

export default FilterAvailable