import React, { useEffect} from 'react'
import './Homepage.css'
import { useDispatch,useSelector } from 'react-redux'
import { setProduct } from './redux/actions/productActions'
import { ActionTypes } from './redux/constants/action-types'
import { Link } from 'react-router-dom'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import {setDiscription} from './redux/actions/discriptionAction'

function Homepage() {
     const dispatch1 = useDispatch(ActionTypes.SET_DISCRIPTION)
   const product = useSelector((state)=>state.products.listproducts)
   const dispatch = useDispatch(ActionTypes.SET_PRODUCTS)
  const callapi =async()=>{
    let url = await fetch("https://fakestoreapi.com/products")
    let res = await url.json();
    
    dispatch(setProduct(res))
    
   
  }
  console.log(product)
  useEffect(()=>{
  callapi()
 // eslint-disable-next-line
  },[])
 const emtyStr =()=>{
  dispatch1(setDiscription(''))
 }
  return (
  
  <div className="main-container">
      <div className="sidebar">
        <div className="sidebar-option">
        <p>sort by price</p>
        <input type="radio" value="sortbyprice" name='price'/>
        </div>
        
        <div className="sidebar-option">
        <p>High to Low</p>
        <input type="radio" value="higtolow" name='price'/>
        </div>

        <div className="sidebar-option">
        <p>Low to High</p>
        <input type="radio" value="low to high" name='price'/>
        </div>
        
       
      </div>
    <div className='homepage-container'>
      
    { product && product.map((item,index)=>{
     return <Link to={`/product/${item.id}`} style={{textDecoration:'none', color:'black'}}  key={index} onClick={emtyStr}>
     <div className='homepage-list'>
       <img src={item.image}  alt="" />
     <p className='item-name'>{item.title}</p>
     <div className="price-container">
     <p className='item-price'>₹ {parseInt(item.price)}</p>
     <p className='item-onwords'>onwords</p>
     </div>
     <p className='free-delevery'>Free Delivery</p>
     <div className="item-rating">
        <div className="rating-icon">
        <p className='item-rating-rate'>{item.rating&& item.rating.rate}</p>
      <StarOutlinedIcon className='rating-logo'/>
        </div>
    
      <p>{item.rating&& item.rating.count} pices left</p>
     </div>
      </div>
      </Link>
    }) }
    
    </div>
    </div>

  )
}

export default Homepage