import React from 'react'
import './styles/Header.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
function Header() {

 let lth = useSelector(state=>state.length.length)



  return (
  <div className="header-main-container">
    <div className='header-container'>

       <div className="left-header">
        <p>meesho</p>
        <div className="ip-section">
          <SearchIcon/>
           <input type="text" placeholder='Try Saree,Kurti or Search by Product Code'/>
      
        </div>
       
       </div>
       <div className="right-header">
        <div className="profile-info-section">
          <PermIdentityIcon/>
        <p>Profile</p>
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
        <p>Women Ethnic</p>
        <p>Women Western</p>
        <p>Men</p>
        <p>Kids</p>
        <p>Home & Kitchen</p>
        <p>Beauty & Health</p>
        <p>Jwellery & Accessories</p>
        <p>Bags & Footwear</p>
        <p>Electronics</p>
      </div>
      </div>
  )
}

export default Header
