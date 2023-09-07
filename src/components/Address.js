import React, { useState } from 'react'
import '../styles/Adress.css'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Address = () => {
const[popUp,setpopUp] = useState("hide-box")
const[addaddress,setaddaddress] = useState("inside-box")

  const[userdetails,setuserdetails]= useState({
    name:'',
  contact:'',
  houseNumber:'',
  roadName:'',
  pincode:'',
  city:'',
  nearbyPlace:''
  })
const handleChange=(e)=>{
  const name = e.target.name
 setuserdetails({
  ...userdetails,[name]:e.target.value
 })
 
}
const addConfirm =()=>{
  if(userdetails.name && userdetails.contact && userdetails.houseNumber && userdetails.roadName && userdetails.pincode && userdetails.city){
    setpopUp("hidden")
    setaddaddress("hide-box1")
  }
  else{
    toast.error("Please fill all the details",{position:"top-center"})
  }

}
const closeBtn =()=>{
  setpopUp("hide-box")
  setaddaddress("inside-box")
}
  return (
    <>
    
    <div className='address-contaier'>
    <div className={popUp}>
      <p className='close-btn' onClick={closeBtn}>Edit</p>
      <p>{userdetails.name}</p>
      <div className="add">
      <p>{userdetails.houseNumber},</p>
     <p>{userdetails.roadName}</p>
      </div>
      <div className="add">
      <p>{userdetails.city}, </p>
     <p>{userdetails.pincode}</p>
      </div>
    
    
     <p>{userdetails.nearbyPlace}</p>
     <p>{userdetails.contact}</p>
     <Link to={'/payment'}><button className='continue-btn'>Deliver to this Address</button></Link>

    </div>




    <div className={addaddress}>
       <p className='add-address'>ADD ADDRESS</p>
       <div className="contact">
       <LocalPhoneOutlinedIcon/>
       <p>Contact Details</p>
       </div>
       
       <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
       <input type="text" placeholder='Contact Number' name='contact'onChange={handleChange}/>
       <div className="location">
       <LocationOnOutlinedIcon/>
       <p>Address</p>
       </div>
      
       <input type="text" placeholder='House no./Building Name' name='houseNumber' onChange={handleChange}/>
       <input type="text" placeholder='Road Name/Area/Colony'name='roadName' onChange={handleChange}/>
       <input type="text" placeholder='Pincode' name='pincode' onChange={handleChange}/>
       <input type="text" placeholder='City'name='city' onChange={handleChange}/>
       <input type="text" placeholder='Nearby Famous Place/Shop/School,etc.(optional)' name="nearbyPlace" onChange={handleChange}/>
       <button className='continue-btn' onClick={addConfirm}>Save Address & Continue</button>
       </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Address