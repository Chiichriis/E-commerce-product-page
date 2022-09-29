import plus from './images/icon-plus.svg';
import minus from './images/icon-minus.svg';
import cart from './images/icon-cart.svg';
import './scss/Order.css';

const Order = ({ count, add, subtract, cartDisplay }) => {

  return (
    <div className='order-section'>

      <div className="counter">
        <img src={minus} alt="minusIcon" onClick={subtract} />
        <p>{count}</p>
        <img src={plus} alt="plusIcon" onClick={add} />
      </div>

      <button className='orderBtn' onClick={cartDisplay}>
        <img src={cart} alt="cartIcon" />
        Add to cart
      </button>
    </div>
  )
}

export default Order