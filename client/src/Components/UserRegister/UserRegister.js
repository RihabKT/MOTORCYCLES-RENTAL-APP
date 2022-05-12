import React, { useState } from 'react';
import "./UserRegister.css";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../../JS/actions/userActions';
import Loader from '../Loader/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';



const UserRegister = () => {

	AOS.init({
        duration: 3000,
        offset:200,
        delay:300,
        // easing: 'ease-in-sine',
      });


	const [firstName, setFirstName]= useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	

	const dispatch = useDispatch();

	const loading = useSelector(state => state.userReducer.loading)

	const register = (e) =>{
		const newUser = {firstName, lastName, email, password, phone, address}
		e.preventDefault();



		dispatch(userRegister(newUser))
		setFirstName("")
		setLastName("")
		setEmail("")
		setPassword("")
		setPhone("")
		setAddress("")
		
	}



  return loading? <Loader/>   :   (

	<>
    <div className='backgroundauth' >



<div className='flexautho' >

<div className="itemauth" data-aos="fade-up-left">
<img src='https://purepng.com/public/uploads/large/purepng.com-kawasaki-ninja-blackmotorcyclemotorbikebikevehiclekawasaki-981525162618d3fhk.png' className='pictureauth' alt="picture" />

</div>

        <div  className="container">
        
	<div className="screen">
		<div className="screen__content">
			<form className="login">
            <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder=" FIRST NAME" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder=" LAST NAME" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
				</div>


				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" class="login__input" placeholder=" EMAIL" onChange={(e) => setEmail(e.target.value)} value={email}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} value={password}/>
				</div>
                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="number" className="login__input" placeholder=" PHONE NUMBER " onChange={(e) => setPhone(e.target.value)} value={phone}/>
				</div>

                <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder=" ADDRESS " onChange={(e) => setAddress(e.target.value)} value={address}/>
				</div>

                {/* <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="number" min="0" max="1" className="login__input" placeholder=" CUSTOMER: 1" onChange={(e) => setRole(e.target.value)} value={role}/>
				</div> */}

				<button className="button login__submit" type='submit' onClick={register}  >
					<span className="button__text"> REGISTER </span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	

            


                <p className='haveaccount'>ALREADY HAVE AN ACCOUNT? <Link className='linklogin' to={"/login"}> LOG IN</Link> </p>

			</form>

			
			
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>

</div>

{/* <button className="buttondesc"  onClick={() => navigate(-2)}>GO BACK</button> */}
    </div>

<Footer/>
	</>
  ) 
}

export default UserRegister