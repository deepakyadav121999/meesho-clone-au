import React from 'react'
import banner1 from './banner1.png'
import './banner12.css'
import { Link } from 'react-router-dom'

const BannerComponent = () => {
  return (
    <div className='bannercomponent'>
      <div className="banner1">
      <img src={banner1} alt="" />
      </div>



      <div className="banner2">
      <Link to={'/womanEthinic'}> <div className="banner2-left">
         <img src="https://images.meesho.com/images/marketing/1692190996099_400.webp" className='banner2-right-img' alt="" />
        </div>  </Link>
        <div className="banner2-right">
        <div className="blank-container"></div>
     <div className="b2-right-main-container">
  
     <Link to={'/men'}><div className="b2-left">
          <img src="https://images.meesho.com/images/marketing/1692191045019_300.webp" className='left-img1' alt="" />
            </div>
        </Link>
          
        <Link to={'/itemunawailable'}><div className="b2-right">
              <img src="https://images.meesho.com/images/marketing/1692191103963_300.webp" alt=""  className='left-img1'/>
            </div>
            </Link>
   
          </div>
          </div>
      </div>








           <div className="banner3">
            
           </div>




      
    </div>
  )
}

export default BannerComponent