import React, { useState } from 'react'
import '../styles/PaymentPage.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { setLength } from '../redux/actions/LengthAction';
import { setTotal } from '../redux/actions/totalAction';
import { ActionTypes } from '../redux/constants/action-types';
import { SetCart } from '../redux/actions/cartAction';




function PaymentPage() {
 const [reloding,setreloding] = useState(false)

  const ttl = JSON.parse(localStorage.getItem('total'))
  const lth = JSON.parse(localStorage.getItem('length'))
  const crt = JSON.parse(localStorage.getItem('products'))

  const total = useSelector(state=>state.total.total)
  const dispatch1 = useDispatch(ActionTypes.SET_TOTAL)
  const dispatch2 = useDispatch(ActionTypes.SET_LENGTH)
  const dispatch3 = useDispatch(ActionTypes.SET_PRODUCTS)
  const paymentBtn =()=>{
    

          localStorage.setItem('total',JSON.stringify(0))
          localStorage.setItem('length',JSON.stringify(0))
          localStorage.setItem('products',JSON.stringify(0))
          dispatch1(setTotal(ttl))
          dispatch2(setLength(lth))
          dispatch3(SetCart(crt))
          setreloding(true)
          alert("Order has Been Palced")
  }

  
  return (
    <div className='main-payment-container'>
       <div className="left-payment-container">
          <p className='select-payment'>Select Payment Method</p>
          <p className='pay-in-cash'>PAY IN CASE</p>
          <div className="icon-down">
          <p className='cash-on delivery'>Cash On Delivery</p>
          <ExpandMoreIcon/>
          </div>
       <div className="payment-radio">
       <p>Pay cash on delivery</p>
         <input type="radio" />
       </div>
      
          <div className="reselling-container">
            <div className="inside-reseller">
            <p>Reselling the Order?</p>
            <p>Click on Yes to add Final Price</p>
            </div>
            <div className="reseller-btn">
              <button id='yes-btn'>Yes</button>
              <button id='no-btn'>No</button>
            </div>
            

          </div>
          
       </div>


       <div className="container-right1">
        <p className='container-right-heading'>Price Details</p>
        <div className="total-product-price">
        <p>Total Product Price</p>
        <p>{parseInt(total)}</p>
        </div>
  
       <div className="order-total">
       <p>Order Total</p>
       <p>{parseInt(total)}</p>
     
       </div>
       <p className='cart-right-smalltext'>Clicking on Continue will not deduct any money</p>

    <Link to={'/home'}> <button onClick={paymentBtn}
    className='continue-btn'
      >Continue</button></Link>
   </div>
</div>

 
  )
}

export default PaymentPage