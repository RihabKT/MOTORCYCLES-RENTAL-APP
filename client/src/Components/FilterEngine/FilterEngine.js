import React from 'react';
import "./FilterEngine.css";


const FilterEngine = (props) => {
  return (
    <div style={{cursor:"pointer"}}>
        <select className='selectengine' onChange={(e) => props.setFilterEngine(e.target.value)}  >
            
        <option className='optionengine'> SELECT ENGINE POWER </option>
            <option className='optionengine'>200 </option>
            <option className='optionengine'>300 </option>
            <option className='optionengine'>400 </option>
            <option className='optionengine'>500 </option>
            <option className='optionengine'>600 </option>
            <option className='optionengine'>700 </option>
            <option className='optionengine' >800 </option>
            <option className='optionengine' >900 </option>
           
        </select>
    </div>
  )
}

export default FilterEngine