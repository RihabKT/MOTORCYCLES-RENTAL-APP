import React from 'react';
import { Link } from 'react-router-dom';
import "./MotoCard.css";


const MotoCard = ({moto}) => {



  return (
    <div>

        <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side--front-1">
              <div className="card__title card__title--1">
               
                <h4 className="card__heading"> {moto.brand} </h4>
                <h4 className='mototitle'> {moto.motoName} </h4>
                <img src={moto.image} alt="motopicture" className='motopicture' width="300"  />
                <p className='enginemoto'> POWERED BY {moto.enginePower} CC ENGINE </p>
              </div>

          
            </div>
            <div className="card__side card__side--back card__side--back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only"> Price Per DAY in $:</p>
                  <p  className="card__price-value"> {moto.rentalPerDay}  </p>
                </div>
                <a href="#popup" className="btn btn--white"><Link  to={`/description/${moto._id}`}  className="linkbook">BOOK NOW</Link>  </a>
               
              </div>
            </div>
          </div>
        </div>

        
          </div>
        </div>

   


  )
}

export default MotoCard