import React,{useEffect, useState} from 'react';
import BookingCard from "../BookingCard/BookingCard"
import { useDispatch, useSelector } from 'react-redux';
import { getMotos } from '../../JS/actions/actionMoto';
import "./BookingScreen.css";
import { DatePicker, Space} from "antd";
import 'antd/es/date-picker/style/index.css';
import 'antd/es/input/style/index.css';
import 'antd/dist/antd.css';
import moment from 'moment';
import Loader from '../Loader/Loader';
import FilterAvailable from '../FilterAvailable/FilterAvailable';
import FilterBrand from '../FilterBrand/FilterBrand';
import FilterEngine from '../FilterEngine/FilterEngine';
import FilterColor from '../FilterColor/FilterColor';



const BookingScreen = () => {

  const loading = useSelector(state => state.userReducer.loading)

  // const {RangePicker} = DatePicker
  // const [totalMotos, setTotalMotos] = useState([])
  
  
  // function setFilterDate(values){
  // var selectedfromdate = moment(values[0] , "DD-MM-YYYY")
  // var selectedtodate = moment(values[1] , "DD-MM-YYYY")
  //   var temp = []
  //     for (var moto of totalMotos)
  //    if (moto.bookedTimeSlots.length === 0){
  //      temp.push(moto)
  //    }
  //    else{
  //     for (var booking of moto.bookedTimeSlots){
  //       if (selectedfromdate.isBetween(booking.fromdate , booking.todate) ||
  //       selectedtodate.isBetween(booking.fromdate , booking.todate) ||
  //       moment(booking.fromdate).isBetween(selectedfromdate, selectedtodate) ||
  //       moment(booking.todate).isBetween(selectedfromdate, selectedtodate) 
  //       )
  //       {
  
  //       }
      
  //      else{
  //        temp.push(moto)
        
  //    }
  //  }
  //    }
  
  // setTotalMotos(temp)
  //   }


    const dispatch = useDispatch();
  const motos = useSelector(state => state.motoReducer.motos)
  

  const getAllMotos = () =>{
    dispatch(getMotos())
  }

  useEffect (() =>{
 getAllMotos()}, [])


//  useEffect(() => {
//   setTotalMotos(motos)
// }, [motos])

 const [filterByBrand, setFilterByBrand] = useState("");
 const [showAvailable, setshowAvailable] = useState(true);
 const [filterEngine, setFilterEngine] = useState("");
 const [filterColor, setFilterColor] = useState("black");


  return loading ? <Loader/> : (
     
<>

<div className='flexyfilters'>
       <FilterBrand setFilterByBrand={setFilterByBrand} />
       <FilterAvailable setshowAvailable={setshowAvailable}  showAvailable={showAvailable}/>
       <FilterEngine setFilterEngine= {setFilterEngine} />
       <FilterColor setFilterColor={setFilterColor} />
       {/* <Space>
       <RangePicker  className='rangepicker' onChange={setFilterDate}     />
       </Space> */}
      </div>


    <div className='MotoGrid'>
        
        {motos.filter(el => el.brand.toLowerCase().includes(filterByBrand.toLowerCase().trim() ) &&
         (el.available === showAvailable) && 
         (el.enginePower >= filterEngine) &&
         el.color.includes(filterColor) ).map(el => <BookingCard  moto={el} key = {el._id} />)}
    </div>
    
    </>
  )
}

export default BookingScreen