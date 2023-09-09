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
const[name,setname] = useState("")
const[contact,setcontact] = useState("")
const[ houseNumber,sethouseNumber] = useState("")
const[roadName,setroadName] = useState("")
const[pincode,setpincode] = useState("")
const[city,setcity] = useState("")
const[nearbyPlace,setnearbyPlace] = useState("")

  
const handleChange1=(e)=>{
 if(name.length<20){
  setname(e.target.value)
 }
 else{
 setname(" ")
  toast.error("Name should be short",{position:"top-center"})
 }
}
const handleChange2=(e)=>{
  if(contact.length<10){
    setcontact(e.target.value)
   }
   else{
    setcontact(" ")
    toast.error("Mobile number should be under 10 digit",{position:"top-center"})
   }
}
const handleChange3=(e)=>{
 if(houseNumber.length<15){
  sethouseNumber(e.target.value)
 }
 else{
  sethouseNumber(" ")
  toast.error("enter valid house number",{position:"top-center"})
 }
}
const handleChange4=(e)=>{
  if(roadName.length<20){
    setroadName(e.target.value)
  }
  else{
    setroadName(" ")
    toast.error("enter road name under 20 character",{position:"top-center"})
  }

}
const handleChange5=(e)=>{
  if(pincode.length<12){
    setpincode(e.target.value)
  }
  else{
    setpincode(" ")
    toast.error("enter correct pincode pincode should be under 6 digits",{position:"top-center"})
  }

}
const handleChange6=(e)=>{
if(city.length<10){
  setcity(e.target.value)
}
else{
  setcity(" ")
  toast.error("enter valid city name ",{position:"top-center"})
}
}
const handleChange7=(e)=>{
  if(nearbyPlace.length<50){
    setnearbyPlace(e.target.value)
  }
else{
  setnearbyPlace(" ")
  toast.error("nearby places shold be under 50 character",{position:"top-center"})
}
}
const addConfirm =()=>{
  if(name && contact &&houseNumber && roadName && pincode && city){
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
      <p>{name}</p>
      <div className="add">
      <p>{houseNumber},</p>
     <p>{roadName}</p>
      </div>
      <div className="add">
      <p>{city}, </p>
     <p>{pincode}</p>
      </div>
    
    
     <p>{nearbyPlace}</p>
     <p>{contact}</p>
     <Link to={'/payment'}><button className='continue-btn'>Deliver to this Address</button></Link>

    </div>




    <div className={addaddress}>
       <p className='add-address'>ADD ADDRESS</p>
       <div className="contact">
       <LocalPhoneOutlinedIcon/>
       <p>Contact Details</p>
       </div>
       
       <input type="text" placeholder='Name'  onChange={handleChange1} value={name}/>
       <input type="number" placeholder='Contact Number' onChange={handleChange2} value={contact}/>
       <div className="location">
       <LocationOnOutlinedIcon/>
       <p>Address</p>
       </div>
      
       <input type="text" placeholder='House no./Building Name'  onChange={handleChange3} value={houseNumber}/>
       <input type="text" placeholder='Road Name/Area/Colony' onChange={handleChange4} value={roadName}/>
       <input type="number" placeholder='Pincode'  onChange={handleChange5} value={pincode}/>
       <input type="text" placeholder='City' onChange={handleChange6} value={city}/>
       <input type="text" placeholder='Nearby Famous Place/Shop/School,etc.(optional)'  onChange={handleChange7} value={nearbyPlace}/>
       <button className='continue-btn' onClick={addConfirm}>Save Address & Continue</button>
       </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Address