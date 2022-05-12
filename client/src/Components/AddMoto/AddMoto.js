import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import { addMoto, editMoto } from '../../JS/actions/actionMoto';
import "./AddMoto.css";


const AddMoto = () => {

    

    const [newMoto, setNewMoto] = useState({
        brand: "", 
        motoName: "", 
        image: "",
        imageOne:"",
        imageTwo:"",
        imageThree:"",
        imageFour:"",
        imageFive:"",
        color:"",
        enginePower:"",
        rentalPerDay:"",
        available:"",
        description:"",
        video:""
    })

    const motoId = useSelector(state => state.motoReducer.motoId)
    const isEdit = useSelector(state => state.motoReducer.isEdit)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isEdit) {
            setNewMoto(motoId)
        } else {
            setNewMoto({  
            brand: "",
             motoName: "", 
             image: "",
             imageOne:"",
             imageTwo:"",
             imageThree:"",
             imageFour:"",
             imageFive:"",
             color:"",
             enginePower:"", 
             rentalPerDay:"",
              available:"", 
              description:"",
               video:""
            })
        }
    }, [motoId, isEdit])


    const handleChange = (e) => {
        setNewMoto({ ...newMoto, [e.target.name]: e.target.value })
    }

  return (
    <div style={{ display: "flex", justifyContent: "center", paddingTop:"20px" , paddingBottom:"320px"}}>

        
        
            <div 
                style={{
                    width: "50rem",
                    height: "68rem",
                    marginRight: "30px",
                    marginBottom: "30px",
                    marginTop: "90px",
                    borderRadius: "10px",
                    border: "none",
                   
                }}
            >
                <h2
                    style={{
                       
                       padding:"15px",
                       paddingTop:"5px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight:"bolder",
                        textAlign:"center",
                        fontFamily:"cursive"
                    }}
                >
                    {isEdit ? "EDIT MOTORCYCLE" : "ADD NEW MOTORCYCLE"}
                </h2>

                <div style={{paddingTop:"20px", backgroundColor:"rgba(128, 128, 128, 0.295)"}}>
                    <div >
                        <form >
                            <div  style={{ textAlign: "center" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}> MOTO BRAND :</label>
                                <input className='addinput' type="text" name="brand"  placeholder="ENTER MOTO BRAND" onChange={handleChange} value={newMoto.brand} />
                            </div>

                            <div  style={{ textAlign: "center",paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}> MOTO NAME :</label>
                                <input className='addinput' type="text" name="motoName"  placeholder="ENTER MOTO NAME" onChange={handleChange} value={newMoto.motoName} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO IMAGE : </label>
                                <input className='addinput' type="text" name="image" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.image} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO FIRST IMAGE : </label>
                                <input className='addinput' type="text" name="imageOne" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.imageOne} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO SECOND IMAGE : </label>
                                <input className='addinput' type="text" name="imageTwo" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.imageTwo} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO THIRD IMAGE : </label>
                                <input  className='addinput' type="text" name="imageThree" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.imageThree} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO FOURTH IMAGE : </label>
                                <input className='addinput' type="text" name="imageFour" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.imageFour} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>MOTO FIFTH IMAGE : </label>
                                <input className='addinput' type="text" name="imageFive" placeholder="ENTER MOTO IMAGE" onChange={handleChange} value={newMoto.imageFive} />
                            </div>
                                
                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive"}}>AVAILABLE COLORS : </label>
                                <input className='addinput' type="text" name="color" placeholder="ENTER AVAILABLE COLORS" onChange={handleChange} value={newMoto.color} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive" }}>MOTORCYCLE ENGINE POWER : </label>
                                <input className='addinput' type="Number" name="enginePower"  placeholder="POWER OF THE ENGINE?" onChange={handleChange} value={newMoto.enginePower} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive" }}>MOTORCYCLE RENTAL PRICE: </label>
                                <input className='addinput' type="Number" name="rentalPerDay"  placeholder="RENTAL PRICE PER DAY?" onChange={handleChange} value={newMoto.rentalPerDay} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive" }}>IS THE MOTORCYCLE AVAILABLE? : </label>
                                <input className='addinput' type="boolean" name="available"  placeholder="TRUE OR FALSE?" onChange={handleChange} value={newMoto.available} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive" }}>MOTORCYCLE DESCRIPTION : </label>
                                <input className='addinput' type="text" name="description"  placeholder="ENTER MOTORCYCLE DESCRIPTION" onChange={handleChange} value={newMoto.description} />
                            </div>

                            <div  style={{ textAlign: "center", paddingTop:"10px" }}>
                                <label style={{color:"rgb(179, 30, 122)", fontWeight:"bolder",fontFamily:"cursive" }}>MOTORCYCLE VIDEO : </label>
                                <input className='addinput' type="text" name="video"  placeholder="ENTER MOTORCYCLE VIDEO" onChange={handleChange} value={newMoto.video} />
                            </div>


                            <div className='flexaddbutton' >
                    
                        <button  className='savebutton' onClick={() => { isEdit ? dispatch(editMoto(newMoto._id, newMoto) ) : dispatch(addMoto(newMoto) ) }} >
                        {isEdit ? "SAVE CHANGES" : "ADD NEW MOTORCYCLE"}
                        </button>
                   
                    <button className='cancelbutton' > CANCEL </button>
                </div>



                        </form>
                    </div>
                </div>
              
            </div>

           
        </div>
  )
}

export default AddMoto