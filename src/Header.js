import React, { useEffect, useState } from 'react'
import './styles/Header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import {setSearch} from './redux/actions/searchAction'
import { ActionTypes } from './redux/constants/action-types';
import LogoutIcon from '@mui/icons-material/Logout';
import {  signOut } from "firebase/auth";
import {auth} from './firebase'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import logo from './logo.png';


function Header() {
 
  
 let lth = useSelector(state=>state.length.length)
const [hid,sethide] = useState("non-hide")
const [profilelogout,setProfilelogout] =useState("hidden-logout")
const user =useSelector((state)=>state.user.user);
const logoutMenu=()=>{
    setProfilelogout('profile-logout')
  
}
const classChange=()=>{
sethide('hide')
}

const dispatch = useDispatch(ActionTypes.SET_SEARCH)

const headerInputChange=(e)=>{
       dispatch(setSearch(e.target.value.toLowerCase()))

}



const navigate = useNavigate();
 
const handleLogout = () => {               
    signOut(auth).then(() => {
    
        navigate("/");
        toast.success("Signed out successfully",{position:"top-center"})
    }).catch((error) => {
   
    });
    setProfilelogout("hidden-logout")
    sethide("non-hide")
}
useEffect(()=>{
  let handle =()=>{
    setProfilelogout("hidden-logout")
  }
  document.addEventListener("mousedown",handle)
})



  return (
    <>
  <div className="header-main-container">
    <div className='header-container'>
  <div className="icon">
<ListIcon onClick ={classChange}/>
  </div>
        <div className={hid}>
          <div className="profile">
          <p className='cros-btn' onClick={()=>sethide('non-hide')}>X</p>
          </div>
      
          <Link to={'/womanEthinic'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Ethnic</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Western</p></Link>
      <Link to={'/men'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> <p className='bottom-container-p'>Men</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Kids</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Home & Kitchen</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Beauty & Health</p></Link>
      <Link to={'/jwellery'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Jwellery & Accessories</p></Link>
      <Link to={'/bags'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Bags & Footwear</p></Link>
      <Link to={'/electronics'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Electronics</p></Link>
      {user ?<div className="logout-sidebar" onClick={handleLogout}>
        <p>Logout</p>
        <LogoutIcon/>
      </div>:
      <div className="logout-sidebar">
        <p>Login</p>
        <LockOpenRoundedIcon/>
      </div>}
        </div>

       <div className="left-header">
        <div>
        <Link to={'/'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='meesho-main-logo'><img src={logo} alt="" /></p></Link></div>
        
        <div className="ip-section">
          <SearchIcon />
          <Link to={'/search'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> <input type="text" className ='header-input' placeholder='Try Saree,Kurti or Search by Product Code' onChange={headerInputChange}/></Link>
      
        </div>
       
       </div>
       <div className="right-header">
        <div className="profile-info-section" onClick={logoutMenu}>
          <PermIdentityIcon/>
        <p >Profile</p>
        </div>
        <div className={profilelogout}>
          <p>Welcome to Meesho</p>
         
         {user?
          <div className="logo-logout" onClick={handleLogout}>
          <p>Logout</p>
          <LogoutIcon/>
          </div>:<div className="logo-logout">
           <p>Login</p>
           <LockOpenRoundedIcon/>
          </div>
         }
        
        </div>
        <Link to={'/cartpage'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}>
          <div className="cart-info-section">
                 <div className="cart-length">
                 <ShoppingCartOutlinedIcon/>
                 <p>{lth}</p>
                 </div>
           
          <p>Cart</p>
          </div>
          </Link>
       </div>
      </div>
      <div className='header-bottom-container'>
      <Link to={'/womanEthinic'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Ethnic</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Women Western</p></Link>
      <Link to={'/men'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}> <p className='bottom-container-p'>Men</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Kids</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Home & Kitchen</p></Link>
      <Link to={'/itemunawailable'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Beauty & Health</p></Link>
      <Link to={'/jwellery'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Jwellery & Accessories</p></Link>
      <Link to={'/bags'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Bags & Footwear</p></Link>
      <Link to={'/electronics'} style={{textDecoration:'none', color:'rgb(59, 58, 58)'}}><p className='bottom-container-p'>Electronics</p></Link>

        
       
        
        
        
        
        
        
      </div>
      </div>
      <ToastContainer/>
      </>
  )
}

export default Header
