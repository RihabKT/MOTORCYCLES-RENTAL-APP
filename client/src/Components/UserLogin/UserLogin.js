import React, { useState } from 'react';
import "./UserLogin.css";
import { Link, Navigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../JS/actions/userActions';
import Loader from '../Loader/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../Footer/Footer';



const UserLogin = () => {

	AOS.init({
        duration: 3000,
        offset:200,
        delay:300,
        // easing: 'ease-in-sine',
      });


	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const loading = useSelector(state => state.userReducer.loading)
	const isAuth = useSelector(state => state.userReducer.isAuth)
	

	const login = (e) =>{
		const info = {email, password}
		e.preventDefault();
	
		dispatch(userLogin(info))

		setEmail("")
		setPassword("")
	}

	

  return loading ? <Loader/> : isAuth?      <Navigate to="/profile"/> : (  

	<>
    <div className='backgroundauth' >

        <div className='flexauth'  >
		
		<div className="itemauth" data-aos="fade-up-right">
        <img src='https://purepng.com/public/uploads/large/purepng.com-kawasaki-ninja-blackmotorcyclemotorbikebikevehiclekawasaki-981525162618d3fhk.png' className='pictureauth' alt="picture" />
        </div>
		
		<div className="container">


	<div className="screenn">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder=" EMAIL" onChange={(e) => setEmail(e.target.value)} value= {email}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="PASSWORD" onChange={(e) => setPassword(e.target.value)} value= {password}/>
				</div>
				<button className="button login__submit" type='submit' onClick={login} >
					<span className="button__text"> LOG IN </span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>

				 

				<p className='haveaccount'> DON'T HAVE AN ACCOUNT? <Link className='linklogin' to={"/register"}> REGISTER </Link> </p>		
			</form>
			<div className="social-login">
				<h3>log in via</h3>
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" style={{marginTop:"5px"}} className="social-login__icon fab fa-facebook"></a>
					<a href="#" style={{marginTop:"5px"}} className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
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

export default UserLogin