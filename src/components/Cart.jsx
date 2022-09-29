import thumbImg from './images/image-product-1-thumbnail.jpg';
import deleteIcon from './images/icon-delete.svg';
import './scss/Cart.css';

const Cart = ({ count, delBtn, checkout }) => {

  return (
    <div className='cart-card'>
        <div className='cart-header'><p>Cart</p></div>

        <div className='cart-content'>

            <div className="content">
                <div>
                    <img src={thumbImg} alt="productImg" />
                    <div className="content-txt">
                        <p>Fall Limited Edition Sneakers <br />$125.00 x {count} <b>${count * 125}.00</b></p>
                    </div>
                </div>
                <img src={deleteIcon} alt="delIcon" className='delIcon' onClick={delBtn} />

            </div>

            <div className="empty-cart">
                <p>Your cart is empty. </p>
            </div>

            <button className='cart-btn' onClick={checkout}>Checkout</button>
        </div>
        
    </div>
  )
}

export default Cart