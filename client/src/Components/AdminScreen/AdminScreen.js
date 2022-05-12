
import React,{useEffect, useState} from 'react';
import AdminCard from "../AdminCard/AdminCard";
import { useDispatch, useSelector } from 'react-redux';
import { getMotos, toggleFalse } from '../../JS/actions/actionMoto';
import { Link } from 'react-router-dom';
import "./AdminScreen.css";
import Filter from '../FilterBrand/FilterBrand';
import Loader from '../Loader/Loader';




const AdminScreen = () => {

  const loading = useSelector(state => state.userReducer.loading)


    const dispatch = useDispatch();
  const motos = useSelector(state => state.motoReducer.motos)
  

  const getAllMotos = () =>{
    dispatch(getMotos())
  }

  useEffect (() =>{
 getAllMotos()}, [])

const [filterByBrand, setFilterByBrand] = useState("")

  return loading ? <Loader/> : (


<>


<div className='flexfilter'>

<Filter  setFilterByBrand={setFilterByBrand}  />
   <Link to="/Add_Moto">
     
       <button className='buttonadd'onClick={() => dispatch(toggleFalse())} > + </button>
   </Link>


      
       </div>


    <div className='AdminGrid'>
        {/* {motos.map(el => <AdminCard moto={el} key = {el._id} />)} */}
        {motos.filter(el => el.brand.toLowerCase().includes(filterByBrand.toLowerCase().trim() )).map(el => <AdminCard moto={el} key = {el._id} />)}
    </div>


    </>
    
  )
}

export default AdminScreen