import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteMoto, getMoto, toggleTrue } from '../../JS/actions/actionMoto';
import "./AdminCard.css";


const AdminCard = ({moto}) => {

  const dispatch = useDispatch();

  return (




<div>

<div className="rowadmin">
<div className="coladmin">
  <div className="cardadmin">
    <div className="cardadmin__side card__side--front-1">
      <div className="cardadmin__title card__title--1">
        <i className="fas fa-paper-plane">

        </i>
        <h4 className="card__heading"> {moto.brand} </h4>
        <h4 className='mototitle'> {moto.motoName} </h4>
        <img src={moto.image} alt="motopicture" className='motopicture' width="300"  />
        <p className='enginemoto'> POWERED BY {moto.enginePower} CC ENGINE </p>


        <div className='flexadminbutton'>
       <Link to="/Add_Moto" >
           <button className='EditButton'  onClick={() => {dispatch(getMoto(moto._id)); dispatch(toggleTrue()) }} > EDIT </button>
       </Link>
            <button className='DeleteButton' onClick={() => dispatch(deleteMoto(moto._id))} > DELETE </button>

    </div>



      </div>

  
      




    </div>
    
</div>
</div>
</div>
</div>
  )
}

export default AdminCard