import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./DescriptionPage.css";
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';



const DescriptionPage = () => {

  const loading = useSelector(state => state.userReducer.loading)
  const Mymotos = useSelector(state => state.motoReducer.motos)

  const params = useParams();
  const navigate = useNavigate();
  const moto = Mymotos.find(el => el._id === params._id)
   
  return loading ? <Loader/> : (

    <>
    <div >

<p className='motorentbrand' > {moto.brand}</p>
<p className='motorentname' >{moto.motoName}</p>

<div className='flexydesc'>



<div className='flexycol'>

<p className='motorentprice' >PRICE PER DAY: {moto.rentalPerDay} $</p>
<p className='motorentengine'>POWER ENGINE:{moto.enginePower} CC </p>
{moto.available? <span className='spanavailable'>CURRENTLY AVAILABLE!</span> : <span className='spanavailable'> CURRENTLY UNAVAILABLE!</span>}
<p className='motocolor'>AVAILABLE COLORS:</p>

 { moto.color.map((el, _id) =>{
return (
  <p className='colorlist'   key={el._id} >
   {el} 
  </p>
)
})} 
 

 
</div>

<div className="pic-ctn">
    <img src={moto.imageOne} alt="pic" className="piccarroussel"/>
    <img src={moto.imageTwo} alt="pic" className="piccarroussel"/>
    <img src={moto.imageThree} alt="pic" className="piccarroussel"/>
    <img src={moto.imageFour} alt="pic" className="piccarroussel"/>
    <img src={moto.imageFive} alt="pic" className="piccarroussel"/>
  </div>




  </div>


<div className='flexybook' style={{paddingTop:"100px"}}>
<iframe  src={moto.video} width="650" height="300" className='videomoto'></iframe>
<p className='descriptionbook'>{moto.description}</p>
</div>

<div className='flexybuttondesc'>
<button className="buttondesc"  onClick={() => navigate(-1)}>GO BACK</button>
<button className="buttondesc" > <Link to="/login" className='linkdesc' >  BOOK NOW </Link></button>
</div>



    </div>

<Footer/>
    </>
  )
}

export default DescriptionPage