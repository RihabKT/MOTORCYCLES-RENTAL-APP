import React from 'react';
import "./FilterColor.css";


const FilterColor = (props) => {
 

  return (
    <div style={{cursor:"pointer"}}>
    <select className='selectcolor' onChange={(e) => props.setFilterColor(e.target.value)}  >
        
    {/* <option className='optioncolor'> SELECT COLOR </option> */}
        <option className='optioncolor'> black </option>
        <option className='optioncolor'> white </option>
        <option className='optioncolor'> gray </option>
        <option className='optioncolor'> blue </option>
        <option className='optioncolor'> red </option>
        <option className='optioncolor'> green </option>
        <option className='optioncolor' > yellow </option>
        <option className='optioncolor'> pink </option>
        <option className='optioncolor' > purple </option>
        <option className='optioncolor' > orange </option>
        <option className='optioncolor' > brown </option>
    </select>
</div>
  )
}

export default FilterColor
