
import React from 'react'
import '../styles/PaymentPage.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';

function DirectBuyNow() {
const discriptions = useSelector((state)=>state.discription.discription)

  const paymentBtn =()=>{
  
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
     <p>{parseInt(discriptions.price)}</p>
     </div>

    <div className="order-total">
    <p>Order Total</p>
    <p>{parseInt(discriptions.price)}</p>
  
    </div>
    <p className='cart-right-smalltext'>Clicking on Continue will not deduct any money</p>

 <Link to={'/'}> <button onClick={paymentBtn}
 className='continue-btn'
   >Continue</button></Link>
</div>
</div>
  )
}

export default DirectBuyNow