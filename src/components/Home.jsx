import Header from "./Header";
import Slider from "./Slider";
import SideBar from "./SideBar";
import PopSlider from "./PopSlider";
import { useState } from "react";
import './scss/Home.css';

import thumb1 from './images/image-product-1-thumbnail.jpg';
import thumb2 from './images/image-product-2-thumbnail.jpg';
import thumb3 from './images/image-product-3-thumbnail.jpg';
import thumb4 from './images/image-product-4-thumbnail.jpg';

import img1 from './images/image-product-1.jpg';
import img2 from './images/image-product-2.jpg';
import img3 from './images/image-product-3.jpg';
import img4 from './images/image-product-4.jpg';

const Home = () => {

  const [count, setCount] = useState(0);

  const imgList = [
    img1, img2, img3, img4
  ]

  const thumbList = [
  thumb1, thumb2, thumb3, thumb4
  ]

  const add = () => setCount(count + 1);

  const subtract = () => {
    if (count === 0){
      setCount(0);
    }else {
      setCount (count - 1);
    }
    
  };


  const cartDisplay = () =>{

    const showCart = document.querySelector('.cart-card');
    const cartId = document.querySelector('.cart-id');    
    const content = document.querySelector('.content');
    const cartBtn = document.querySelector('.cart-btn');
    const empty = document.querySelector('.empty-cart');
    const cartIcon = document.querySelector('.cart');


    showCart.style.visibility = 'visible';
    cartIcon.style.filter = 'brightness(-200%)';

    if (count === 0) { 
      content.style.visibility = 'hidden';
      cartBtn.style.visibility = 'hidden';
      empty.style.visibility = 'visible';
    }
    else{
      cartId.style.visibility = 'visible';

      cartBtn.style.visibility = 'visible';
      content.style.visibility = 'visible';
      empty.style.visibility = 'hidden';

    }
    
  }

  const checkout = () =>{
    const showCart = document.querySelector('.cart-card');
    const content = document.querySelector('.content');
    const cartBtn = document.querySelector('.cart-btn');
    
    showCart.style.visibility = 'hidden';
    content.style.visibility = 'hidden';
    cartBtn.style.visibility = 'hidden'
  }

  const delBtn = () => {
    const content = document.querySelector('.content');
    const cartBtn = document.querySelector('.cart-btn');
    const empty = document.querySelector('.empty-cart');
    const cartId = document.querySelector('.cart-id');

    content.style.visibility = 'hidden';
    cartBtn.style.visibility = 'hidden';
    empty.style.visibility = 'visible';
    cartId.style.visibility = 'hidden';

    setCount(0);
  }

  const popslide = ()=>{
    const slidePop = document.querySelector('.pop-slider');
    slidePop.style.visibility = 'visible';
  }

  const closeSlide = ()=>{
    const slidePop = document.querySelector('.pop-slider');
    slidePop.style.visibility = 'hidden';
  }


  return (
    <div className="home">
        <Header count={count} cartDisplay={cartDisplay} delBtn={delBtn} checkout={checkout}/>
        <section className="body">
            <Slider imgList={imgList} thumbList={thumbList} popslide={popslide}/>
            <SideBar add ={add} subtract={subtract} count={count} cartDisplay={cartDisplay} />
        </section>

        <PopSlider imgList={imgList} thumbList={thumbList} closeSlide={closeSlide} />

    </div>
  )
}

export default Home