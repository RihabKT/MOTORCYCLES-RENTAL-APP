import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";
import {useDispatch, useSelector} from "react-redux";
import Modal from 'react-modal';
import { logout } from '../../JS/actions/userActions';
import { getProfiles,editUser } from '../../JS/actions/profileActions';




const NavBar = () => {

  const [newInfo, setNewInfo] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    address:"",
    phone:"",

})



  const user = useSelector(state => state.userReducer.user)
const isAuth = useSelector(state => state.userReducer.isAuth)
const userId = useSelector(state => state.userReducer.userId)


const dispatch = useDispatch()

useEffect(() => {
    console.log("ok")
        setNewInfo(userId)}, [userId])



const handleChange = (e) => {
    setNewInfo({ ...newInfo, [e.target.name]: e.target.value })
}






const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
	setIsOpen(true);
}

function closeModal() {
	setIsOpen(false);
}



  return (

  

<div style={{cursor:"pointer"}}>



{isAuth && user.role === 1 ? ( <div className='flexnav'>
        <img src='https://purepng.com/public/uploads/large/purepng.com-kawasaki-ninja-blackmotorcyclemotorbikebikevehiclekawasaki-981525162618d3fhk.png' className='logomoto' alt="logo" width="110"/>
        
        
        <p className='slogan'>THE ROAD IS MINE! <br/> FOR MOTORCYCLE RENTAL </p>

       


    




    <div className='myflex'>



        
        <button className='btnfirstname' > WELCOME {user&&user.firstName} !
        <ul className="dropdown">


         <li> <p id="dropauth" > <Link to="/booking" className='linkdrop'  >  RENT MOTORCYCLES </Link>  </p> </li>
         <li> <p id="dropauth"> <Link to="/mybookings"  className='linkdrop'> MY BOOKINGS </Link> </p> </li>
         <li> <p id="dropauth" > <Link to="/profile" className='linkdrop' >  MY PROFILE  </Link>  </p> </li>
         <li> <p id="dropauth" onClick={openModal}> MODIFY PROFILE </p> </li>
         <li> <p id="dropauth" > <Link to="/" className='linkdrop' > HOME PAGE  </Link>  </p> </li>
         <li> <p id="dropauth" >  <Link to="/" className='linkdrop'  onClick={() => dispatch(logout())}>   LOGOUT  </Link> </p> </li>
        
         

            </ul>


        </button>
       

        </div>


      

        <Modal
                className='add-modal '
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >
                <h1 className='modifyprofile'>MODIFY MY INFORMATION</h1>
                <form className='form'>
                    <label className='label'>First Name</label>
                    <input 
                        className='input'
                        type='text'
                        name='firstName'
                        value={newInfo.firstName} 
                        onChange={handleChange}
                    />
                    <label className='label'>Last Name</label>
                    <input
                       className='input'
                        type='text'
                        name='lastName'
                        value={newInfo.lastName} 
                        onChange={handleChange}
                    />
                    <label className='label'>Email</label>
                    <input
                       className='input'
                        type='text'
                        name='email'
                        value={newInfo.email} 
                        onChange={handleChange}
                    />
                    <label className='label'>password</label>
                    <input
                       className='input'
                        type='text'
                        name='password'
                        value={newInfo.password} 
                        onChange={handleChange}
                    />

                    <label className='label'>Phone Number</label>
                    <input
                       className='input'
                        type='number'
                        name='phone'
                        value={newInfo.phone} 
                        onChange={handleChange}
                    />
                    <label className='label'>Address</label>
                    <input
                       className='input'
                        type='text'
                        name='Address'
                        value={newInfo.address} 
                        onChange={handleChange}
                    />
                </form>
                <button className='Modal-btn' type='submit' onClick={() => {closeModal();dispatch(getProfiles(userId._id)); dispatch(editUser(newInfo._id, newInfo)) }}>
                    Submit
                </button>
                <button className='Modal-btn' onClick={closeModal}>
                    close
                </button>
            </Modal>


        </div>
   ) : 


   isAuth && user.role === 0 ? ( <div className='flexnav'>
   <img src='https://purepng.com/public/uploads/large/purepng.com-kawasaki-ninja-blackmotorcyclemotorbikebikevehiclekawasaki-981525162618d3fhk.png' className='logomoto' alt="logo" width="110"/>
   
   
   <p className='slogan'>THE ROAD IS MINE! <br/> FOR MOTORCYCLE RENTAL </p>

  







<div className='myflex'>



   
   <button className='btnfirstname' > WELCOME {user&&user.firstName} !
   <ul className="dropdown">


    <li> <p id="dropadmin" > <Link to="/Admin" className='linkdrop'  >  MANAGE MOTORCYCLES </Link>  </p> </li>
    {/* <li> <p id="dropauth" > <Link to="/Add_Moto" className='linkdrop'  >  ADD MOTORCYCLES </Link>  </p> </li> */}
    <li> <p id="dropauth"> <Link to="/All_Users"  className='linkdrop'> ALL USERS </Link> </p> </li>
    <li> <p id="dropauth"> <Link to="/All_Bookings"  className='linkdrop'> VALIDATE BOOKINGS </Link> </p> </li>
    <li> <p id="dropauth" > <Link to="/profile" className='linkdrop' >  MY PROFILE  </Link>  </p> </li>
    <li> <p id="dropauth" onClick={openModal}> MODIFY PROFILE </p> </li>
    <li> <p id="dropauth" > <Link to="/" className='linkdrop' >  HOME PAGE  </Link>  </p> </li>
    <li> <p id="dropauth" >  <Link to="/" className='linkdrop'  onClick={() => dispatch(logout())}>   LOGOUT  </Link> </p> </li>
   
    

       </ul>


   </button>
  

   </div>


 

   <Modal
           className='add-modal '
           isOpen={modalIsOpen}
           onRequestClose={closeModal}
       >
           <h1 className='modifyprofile'>MODIFY MY INFORMATION</h1>
           <form className='form'>
               <label className='label'>First Name</label>
               <input 
                   className='input'
                   type='text'
                   name='firstName'
                   value={newInfo.firstName} 
                   onChange={handleChange}
               />
               <label className='label'>Last Name</label>
               <input
                  className='input'
                   type='text'
                   name='lastName'
                   value={newInfo.lastName} 
                   onChange={handleChange}
               />
               <label className='label'>Email</label>
               <input
                  className='input'
                   type='text'
                   name='email'
                   value={newInfo.email} 
                   onChange={handleChange}
               />
               <label className='label'>password</label>
               <input
                  className='input'
                   type='text'
                   name='password'
                   value={newInfo.password} 
                   onChange={handleChange}
               />

               <label className='label'>Phone Number</label>
               <input
                  className='input'
                   type='number'
                   name='phone'
                   value={newInfo.phone} 
                   onChange={handleChange}
               />
               <label className='label'>Address</label>
               <input
                  className='input'
                   type='text'
                   name='Address'
                   value={newInfo.address} 
                   onChange={handleChange}
               />
           </form>
           <button className='Modal-btn' type='submit' onClick={() => {closeModal();dispatch(getProfiles(userId._id)); dispatch(editUser(newInfo._id, newInfo)) }}>
               Submit
           </button>
           <button className='Modal-btn' onClick={closeModal}>
               close
           </button>
       </Modal>


   </div>
)






  : ( <div className='flexnav'>
        <img src='https://purepng.com/public/uploads/large/purepng.com-kawasaki-ninja-blackmotorcyclemotorbikebikevehiclekawasaki-981525162618d3fhk.png' className='logomoto' alt="logo" width="120"/>
        
        
        <p className='slogan'>THE ROAD IS MINE! <br/> FOR MOTORCYCLE RENTAL </p>

       

    <div className='myflex'>

        <p className='registernav'> <Link to="/login" className='linklogin'> LOG IN </Link> </p>
        
        <p className='registernav'>  <Link to="/register" className='linkregister'> REGISTER </Link></p>
        

        
        </div>
        </div>)}
   

        </div>

   
  )
}

export default NavBar