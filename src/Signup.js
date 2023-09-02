import React, { useState } from 'react'
import './styles/Signup.css';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const[email,setemail] =useState('');
  const[password,setpassword] = useState('')
  const[name,setname] = useState('')

  const emailChange =(e)=>{
  setemail(e.target.value)
  }
  const passChange =(e)=>{
    setpassword(e.target.value)
  }
  const nameChange =(e)=>{
    setname(e.target.value)
  }

  const signupbtn =()=>{
    createUserWithEmailAndPassword(auth,email,password).then((res)=>{
       const user = res.user;
       updateProfile(user,{
           displayName:name
       })
     toast.success("Successfully Ragisterd",{position:"top-center"})
      setemail('')
      setpassword('')
      setname('')
      console.log(res)
    }).catch(res=>toast.error(res.message))
  }
  return (
    <>
   <div className='main-login-container'>
    <div className='signup-container'>
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
       <p className='ssin'>Sign Up to view your profile</p> 
       <input type="text" placeholder='Enter Your Name' value={name} onChange={nameChange}/>
 
        <input type="text"  placeholder='Enter your Email' value={email} onChange={emailChange}/>
        <input type="password" placeholder='Enter your Password' value={password} onChange={passChange}/>
        <button onClick={signupbtn}>Sign Up</button>
     <Link to={'/'}> <p className='ssp-btn'>Back To Main Page</p></Link>
 
      </div>
      </div>
    <ToastContainer/>
    </>
    
  )
}

export default Signup