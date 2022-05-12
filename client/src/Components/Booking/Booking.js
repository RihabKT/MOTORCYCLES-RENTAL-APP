import React, {  useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./Booking.css";
import {  useDispatch, useSelector } from 'react-redux';
import {Checkbox, DatePicker, Space, message} from 'antd';
import 'antd/es/date-picker/style/index.css';
import 'antd/es/input/style/index.css';
import moment from "moment";
import 'antd/dist/antd.css';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';








const Booking = () => {

const [fromdate, setFromdate] = useState("");
const [todate, setTodate] = useState("");
const [totalDays, setTotalDays] = useState(0);
const [rider, setRider] = useState(false);
const [totalAmount, setTotalAmount]= useState(0);


const dispatch = useDispatch();


const loading = useSelector(state => state.userReducer.loading)
const {RangePicker} = DatePicker;
  const Mymotos = useSelector(state => state.motoReducer.motos);
  const user = useSelector(state => state.userReducer.user);
  


  const params = useParams();
  const navigate = useNavigate();
  const moto = Mymotos.find(el => el._id === params._id)
   
function selectTimeSlots(value){
   setFromdate(moment(value[0]).format("DD-MM-YYYY"))
   setTodate(moment(value[1]).format("DD-MM-YYYY"))

   setTotalDays(value[1].diff(value[0] , "days" ))
   setTotalAmount(value[1].diff(value[0] , "days" ) * moto.rentalPerDay)
}
  

const booknow = async () => {
  const reqObj = {
    user: user._id,
    moto: moto._id,
    totalDays,
    totalAmount,
    bookedTimeSlots:{
      fromdate,
      todate
    }
  };
  try {
    await axios.post('http://localhost:5000/api/theroadismine/booking/bookMoto', reqObj);
    console.log("success")
    message.success("SUCCESSFUL BOOKING!")
    // navigate('/profile');
  } catch (error) {
    message.error("OOOUUPS...CANNOT BOOK NOW,PLEASE TRY LATER!")
    console.log(error);
  }
};

// function booknow(){

//   const reqObj = {
//     user: JSON.parse(localStorage.getItem('user'))._id,
//     moto: moto._id,
//     totalDays,
//     totalAmount,
//     bookedTimeSlots:{
//       fromdate,
//       todate
//     }
//   }

//   dispatch(bookMoto(reqObj))
// }

  


  return loading ? <Loader/> : (

    <>
    <div style={{cursor:"pointer"}}>



<p className='motorentbrand' > {moto.brand}</p>

<p className='motorentname' >{moto.motoName}</p>


<div className='flexyslot'  style={{paddingTop:"50px"}}>
  <div className='newflexslot' >
  <h2 style={{fontFamily:"cursive" ,fontWeight:"bolder", textDecoration:"underline", color:"rgb(40, 34, 63)"}}> CHOOSE YOUR RENTAL DATE:</h2>
 <Space>
  <RangePicker  className='rangepicker' style={{display:"flex",height: '30px', width: '400px', marginTop:"50px"}}  format="DD-MM-YYYY" onChange={selectTimeSlots} />
  </Space>
  </div>

{fromdate && todate &&(



<div style={{paddingLeft:"70px"}}>
<p className='totdays'> TOTAL DAYS = {totalDays} </p>

<p className='rentmotoprice'> RENTAL PER DAY = {moto.rentalPerDay} $ </p>
<Checkbox className='checkslot' onChange={(e) => {
  if (e.target.checked){
    setRider(true);
  }
  else{
    setRider(false)
  }
  }}> HAVE A VALID MOTORCYCLE RIDING LICENCE!  </Checkbox> 
  
<p className='totamount'> TOTAL AMOUNT = {totalDays * moto.rentalPerDay} $ </p>

</div>)}


</div>
<button className='rentalbtn' onClick={booknow} > RENT NOW </button>





<div className='flexybook'>
<iframe  src={moto.video} width="650" height="300" className='videomoto'></iframe>
<p className='descriptionbook'>{moto.description}</p>
</div>



<div className='flexybuttondesc'>
<button className="buttondesc"  onClick={() => navigate(-1)}>GO BACK</button>

</div>



    </div>


<Footer/>
    </>
  )
}

export default Booking