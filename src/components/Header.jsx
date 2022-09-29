import burger from './images/icon-menu.svg';
import cart from './images/icon-cart.svg';
import img from './images/image-avatar.png';
import logo from './images/logo.svg';
import close from './images/icon-close.svg';
import Cart from './Cart';
import './scss/Header.css';

const Header = ({ count, cartDisplay, delBtn, checkout }) => {
    
    const menu = ()=>{
        const nav = document.querySelector('.nav');
       nav.style.visibility ='visible';
    }

    const closeBtn = ()=>{
        const nav = document.querySelector('.nav');
        nav.style.visibility ='hidden';
    }

  return (
    <div className='header-container'>
        <div className='header'>
            <div>
                <img src={burger} alt="menu-icon" className='burger' onClick={menu}/>
                <img src={logo} alt="logo-img" className='logo' />
                <div className="nav">
                <img src={close} alt="close-icon" className='close' onClick={closeBtn}/>
                    <ul>
                        <li><a href="###">Collections</a></li>
                        <li><a href="###">Men</a></li>
                        <li><a href="###">Women</a></li>
                        <li><a href="###">About</a></li>
                        <li><a href="###">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div>
                <div className="cart-content">
                    <img src={cart} alt="cart-icon" className='cart' onClick={cartDisplay}/>
                    <div className='cart-id'>{count}</div>
                </div>
                <img src={img} alt="avatar" className='avatar'/>
            </div>
        </div>

        <Cart count={count} delBtn = {delBtn} checkout={checkout}/>
        
    </div>
    
  )
}

export default Header