import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import "./MyBookings.css";
import Loader from '../Loader/Loader';
import { getMyBookings } from '../../JS/actions/bookingActions';




const MyBookings = () => {


const dispatch = useDispatch();
  const loading = useSelector(state => state.userReducer.loading)
  const bookings = useSelector(state => state.bookingsReducer.bookings)


  const getAllMyBookings = () =>{
    dispatch(getMyBookings())
  }



 useEffect (() =>{
 getAllMyBookings()}, []) 
 

  

  return loading? <Loader/>   :    (

    <>
    <div className='mybookingspage'>

     <h3 className='titlemybookings'> MY BOOKINGS: </h3>

     <table  className='mybookingtable'>

<thead >
     <tr >
     <th className='thmybooking'> BOOKING ID </th>
     <th className='thmybooking'> MOTO ID </th>
     <th className='thmybooking'> FROM DATE </th>
     <th className='thmybooking'> TO DATE </th>
     <th className='thmybooking'> TOTAL DAYS </th>
     <th className='thmybooking'> TOTAL AMOUNT </th>
     </tr>
 </thead>




     
     {bookings && bookings.map((booking, _id) => {
return(
    <tbody className='rowmybooking' key={_id}>
                    <tr>
                      <td className='tdmybooking'>{booking._id}</td>
                      <td className='tdmybooking'>{booking.moto}</td>
                      <td className='tdmybooking'>{booking.bookedTimeSlots.fromdate}</td>
                      <td className='tdmybooking'>{booking.bookedTimeSlots.todate}</td>
                      <td className='tdmybooking' style={{textAlign:"center"}}>{booking.totalDays}</td>
                      <td className='tdmybooking' style={{textAlign:"center"}}>{booking.totalAmount}</td>
                    </tr>
                  </tbody>
                );
              })}

           
        

      </table>

    </div>

    </>
  )
}

export default MyBookings