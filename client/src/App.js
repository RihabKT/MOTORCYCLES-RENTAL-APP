import React, {useEffect}  from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Home/Home';
import DescriptionPage from "./Components/DescriptionPage/DescriptionPage";
import NavBar from './Components/NavBar/NavBar';
import UserRegister from './Components/UserRegister/UserRegister';
import UserLogin from './Components/UserLogin/UserLogin';
import UserProfile from './Components/UserProfile/UserProfile';
import PrivateRoute from './Components/PrivateRoute';
import {getProfile} from "./JS/actions/userActions";
import AdminScreen from './Components/AdminScreen/AdminScreen';
import AddMoto from './Components/AddMoto/AddMoto';
import UsersTable from './Components/UsersTable/UsersTable';
import ValidateBookings from './Components/ValidateBookings/ValidateBookings';
import Booking from './Components/Booking/Booking';
import BookingScreen from './Components/BookingScreen/BookingScreen';
import Cover from './Components/Cover/Cover';
import PrivateRouteAdmin from './Components/PrivateRouteAdmin';
import MyBookings from './Components/MyBookings/MyBookings';





function App() {

  const dispatch = useDispatch()
  const isAuth= useSelector(state=>state.userReducer.isAuth)


  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])

  

  return (

    


    
      <body >
<header>
  <NavBar/>
</header>


    <main style={{backgroundColor:"white"}} >
<Routes>
  <Route path='/' element={<Cover/>} />
<Route path="/home" element={<Home/>}  />
<Route path="/description/:_id" element={<DescriptionPage  />}    />
<Route path="/register" element={<UserRegister/>}  />
<Route path="/login" element={<UserLogin/>} />
<Route path="/profile" element={<PrivateRoute component={UserProfile} />} />
<Route path="/Admin" element={< PrivateRouteAdmin component={AdminScreen} />}  />
<Route path='/Add_Moto' element={<PrivateRouteAdmin component={AddMoto}  />} />
<Route path="/All_Users" element={<PrivateRouteAdmin component={UsersTable}  /> } />
<Route path='/All_Bookings' element={<PrivateRouteAdmin component={ValidateBookings}  />}  />
<Route path='/booking' element={< PrivateRoute component={BookingScreen }  />} />
<Route path="/booknow/:_id" element={< PrivateRoute component={Booking} />} />
<Route path='/mybookings' element={<PrivateRoute component={MyBookings} /> } />


</Routes>


</main>

</body>
  
    
  );
}

export default App;
