import prev from './images/icon-previous.svg';
import next from './images/icon-next.svg';
import cross from './images/icon-close.svg';
import './scss/PopSlider.css';
import { useState } from 'react';

const PopSlider = ({imgList, thumbList, closeSlide }) => {

    const [index, setIndex] = useState(0);


    const slideNxt = () => {

        if (index === 0 || index !== imgList.length -1) {
            setIndex(index + 1);
        }else{
            setIndex (0)
         }
   
     }

    const slidePrev = () => {

        if (index === imgList.length -1 || index !== 0) { //using "imgList.length-1" becos i am already on the zero index.
            setIndex(index - 1);
        }else{
            setIndex(3);
        }
   
    }




  return (
    <div className='pop-slider'>
        <div className="sliderWrapper">
            <div className='cross'><img src={cross} alt="cross-symbol" onClick={closeSlide} /></div>

            <div className='slide-img'>
                <img src={imgList[index]} alt="slide-Img" className='img'/>

                <div className="cusors">
                    <img src={prev} alt="previous-icon" onClick={slidePrev} />
                    <img src={next} alt="next-icon" onClick={slideNxt}/>
                </div>

            </div>    

            <div className="thumbnail-section"> 

                <img src={thumbList[0]} alt="thumb" className='thumb-active' onClick={()=> setIndex(0)}/>
                <img src={thumbList[1]} alt="thumb"  onClick={()=> setIndex(1)}/>
                <img src={thumbList[2]} alt="thumb"  onClick={()=> setIndex(2)}/>
                <img src={thumbList[3]} alt="thumb"  onClick={()=> setIndex(3)}/>

            </div>

        </div>
    </div>
  )
}

export default PopSlider