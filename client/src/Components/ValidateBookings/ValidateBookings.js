import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBooking, getbooking, getBookings } from '../../JS/actions/bookingActions';
import "./ValidateBookings.css";
import Loader from '../Loader/Loader';



const ValidateBookings = () => {


   const [validation,setValidation] = useState(false);
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookingsReducer.bookings)
    const loading = useSelector(state => state.userReducer.loading)
  
    const getAllBookings = () =>{
      dispatch(getBookings())
    }
  
    useEffect (() =>{
   getAllBookings()}, [])

   


  

  return loading? <Loader/>   :    (

    <>
    <div className='allbookingspage' style={{ textAlign:"center", paddingLeft:"180px",paddingBottom:"50px", cursor:"pointer"}}>

     <h3 id='titleallbookings'> VALIDATE BOOKINGS: </h3>

    {/* <button onClick={()=>console.log("first")}>ok</button> */}

     <div className="allbookings">
           
     <table className='bookingtable'>

<thead >
     <tr >
     <th className='thBookings'> BOOKING ID </th>
     <th className='thBookings'> MOTO ID </th>
     <th className='thBookings'> USER ID</th>
     <th className='thBookings'> FROM DATE </th>
     <th className='thBookings' > TO DATE </th>
     <th className='thBookings' > TOTAL DAYS </th>
     <th className='thBookings'> TOTAL AMOUNT </th>
     </tr>
 </thead>


 {bookings &&
              bookings.map((booking, _id) => {
return(
    <tbody className='rowbooking' key={_id}>
                    <tr>
                      <td className='tdBookings'>{booking._id}</td>
                      <td className='tdBookings'>{booking.moto}</td>
                      <td className='tdBookings'>{booking.user}</td>
                      <td className='tdBookings'>{booking.bookedTimeSlots.fromdate}</td>
                      <td className='tdBookings'>{booking.bookedTimeSlots.todate}</td>
                      <td className='tdBookings' >{booking.totalDays}</td>
                      <td className='tdBookings'>{booking.totalAmount}</td>


                  <button className='btnvalidate' onClick={() =>{dispatch(getbooking(booking._id)); setValidation(!validation)}}  >  {!validation? "CONFIRM": <span>&#10003;</span>} </button>
                   <button  className='btnignore' onClick={() => dispatch(deleteBooking(booking._id))}> IGNORE </button>
                  
                     


                      
                    </tr>
                   
                  </tbody>
                   
                );
              })}




 </table>



        </div>



    </div>


    </>
  )
}

export default ValidateBookings