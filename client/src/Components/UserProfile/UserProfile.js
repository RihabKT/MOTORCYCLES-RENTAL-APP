import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import "./UserProfile.css";




const UserProfile = () => {


  
const loading = useSelector(state => state.userReducer.loading)
const user = useSelector(state => state.userReducer.user)



  return loading ? <Loader/> : (

   <>
    <div className='profilecontent' >
     

    <div className="card-container">
       
	<span className="pro">PRO</span>
	<img className ="round" src="https://www.itl.cat/pngfile/big/162-1626703_man-in-black-alpine-star-motorcycle-suit-riding.jpg" alt="userimage" />

	<div className='flexyaddress'>
	<img className='localisationpic' src='https://e7.pngegg.com/pngimages/348/786/png-clipart-location-computer-icons-space-location-photography-black-thumbnail.png' alt='localpicture' width="25"/>
	<p className='profileaddress'>{user&&user.address}</p>
	</div>

  <div className='flexyprofile'>
	<h3 className='profilename'>{user&&user.firstName} </h3>
  <h3 className='profilelastname'>{user&&user.lastName}</h3>
  </div>
	<h6 className='profileemail'> {user&&user.email} </h6>
  <p className='profilephone'> {user&&user.phone} </p>
	<p className='profiletext'> MOTORCYCLES LOVER </p>
	<div className="buttons">
		<button className="btnmessage">
			MESSAGE
		</button>
		<button className="btnfollow">
			FOLLOW
		</button>
	</div>
	
</div>

    </div>

<Footer/>

	</>
  )
}

export default UserProfile