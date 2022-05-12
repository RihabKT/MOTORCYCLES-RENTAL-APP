import React, {useState} from 'react';
import "./Cover.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import Modal from "react-modal";
import Footer from '../Footer/Footer';


const Cover = () => {

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
	setIsOpen(true);
}

function closeModal() {
	setIsOpen(false);
}


  const loading = useSelector(state => state.userReducer.loading)

    AOS.init({
        duration: 3000,
        offset:200,
        delay:300,
        // easing: 'ease-in-sine',
      });

    
  return loading?  <Loader/> : (
<>
    <div style={{padding:"25px", cursor:"pointer"}}>
     
    <div className='flexycover'>
<div className="itemcover" data-aos="fade-up-right">
  <img src='https://hips.hearstapps.com/seventeen/assets/16/30/1469657229-1-sheet1.jpg' alt='coverimg' width="200"/>
</div>

<div className="itemcover" data-aos="fade-up-left">
<img src='https://cdn.shopify.com/s/files/1/1935/1613/products/AZQSD-Oil-Painting-By-Number-Elvis-Presley-Painting-Drawing-DIY-Acrylic-Oil-Painting-Canvas-Pictures-Abstract.jpg_640x640_b986ba7a-24bf-44b9-92bf-06f489d9d11a_480x480.jpg?v=1571302054' alt='coverimg'width="200" height="300" />
</div>

<div className="itemcover" data-aos="flip-up">
<img src='https://i.pinimg.com/originals/d5/7d/aa/d57daa91593893816102aa48b8730414.jpg' alt='coverimg' width="200" height= "300" />
</div>

<div className="itemcover" data-aos="zoom-in-up">
<img src='http://cdn.shopify.com/s/files/1/0630/8509/products/pst0945dnmnr_grande.jpg?v=1465327044' alt='coverimg' width="200" height="300" />
</div>
<div  className="itemcover" data-aos="zoom-out-right">
<img src='https://www.figurerealm.com/userimages/customs/25500/25313-1.jpg' alt='coverimg'width="200"/>
</div>



        </div>
   
   <div className='flexybtncover'>
  <button className="noselect" onClick={openModal}><span className='spanbtn'> USER GUIDE </span></button>
   <Link to="/home"><button className="noselect"><span className='spanbtn'> LET'S GET STARTED </span></button></Link>
   </div>



   <Modal
                className='aboutusmodal '
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
            >

<div style={{backgroundColor:"plum"}} className='flexaboutus'>
<img src="https://uxwing.com/wp-content/themes/uxwing/download/18-education-school/user-guide.png" className='imageaboutus' alt="pictureaboutus" width="40"/>
<h2 className='aboutustitle'> USER GUIDE </h2>
</div>

<p style={{paddingTop:"15px"}} className='aboutustext'> "THE ROAD IS MINE FOR MOTORCYCLE RENTAL" offers you a collection of different
vehicules to book .</p>

<h3 className='stepsaboutus'>To choose one or more motorcycles to rent, you can follow these steps: </h3>

<p className='aboutustext'> 1-You can check our available vehicules when you click on "LET'S GET STARTED" button.<br/>
2-To be able to book one or more motorcycles, you should create an account and fill in all the mandatory boxes. <br/>
3-Go to login. <br/>
4-Click on "RENT MOTORCYCLES" option to choose your suitable vehicule.<br/>
5-You can search your favorite motorcycle brand and check our available vehicules. You can select your needed engine power and color as well to make your searching easier.Later on, click on "BOOK NOW" button.<br/>
6-You should mention your rental duration to see the total days and price. Then, click on "RENT NOW" button.<br/>
7-To make sure of your booking, you can check "MY BOOKINGS" option. <br/>

  </p>


<div className='flexaboutus'>
<img src="https://library.kissclipart.com/20180909/viw/kissclipart-caution-sign-icon-clipart-computer-icons-warning-s-cd5c363ef8848127.png" className='imageaboutus' alt="pictureaboutus" width="20"/>
  <h3 className='noticeaboutus' style={{marginTop:"5px", marginLeft:"5px"}}> TAKE NOTICE : <br/></h3>
  </div>

  <p className='aboutustext' style={{textAlign:"center"}}> You can modify any of your information when you click on "MODIFY PROFILE" option. <br/></p>


<div className='flexaboutus'>
<img src="https://library.kissclipart.com/20180909/viw/kissclipart-caution-sign-icon-clipart-computer-icons-warning-s-cd5c363ef8848127.png" className='imageaboutus' alt="pictureaboutus" width="20"/>
  <h3 className='noticeaboutus' style={{marginTop:"5px", marginLeft:"5px"}}> ANOTHER NOTICE : <br/></h3>
  </div>

  <p className='aboutustext' style={{textAlign:"center"}}> For more queries or information, please contact us. <br/>  </p>
 
  
  <div className='flexaboutus'>

  <h4 className='lastaboutus'> Thank you for your attention, and let's get started!</h4>
  <img src="https://www.itl.cat/pngfile/big/156-1566235_tvs-racing-motorcycle.png" className='imageaboutus' alt="pictureaboutus" width="95"/>
  </div>
  

<button className='btnaboutus' onClick={closeModal}>
                    close
                </button>
    </Modal>






</div>

<Footer/>

</>

  )
}

export default Cover