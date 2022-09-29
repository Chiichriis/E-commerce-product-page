import prev from './images/icon-previous.svg';
import next from './images/icon-next.svg';

import { useState } from 'react';
import './scss/Slider.css';


const Slider = ({ imgList, thumbList, popslide }) => {

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
    <div className='slider'>

      <div className='slide-wrap'>
        <div className='slide-item'><img src={imgList[index]} alt="slide-Img" onClick={popslide}/></div>
      </div>      
      

      <div className="slide-cusor">
        <img src={prev} alt="previous-icon" onClick={slidePrev} />
        <img src={next} alt="next-icon" onClick={slideNxt}/>
      </div>

      <div className="slide-thumbnail"> 

        <img src={thumbList[0]} alt="thumb" className='pix active' onClick={()=> setIndex(0)}/>
        <img src={thumbList[1]} alt="thumb" className='pix' onClick={()=> setIndex(1)}/>
        <img src={thumbList[2]} alt="thumb" className='pix' onClick={()=> setIndex(2)}/>
        <img src={thumbList[3]} alt="thumb" className='pix' onClick={()=> setIndex(3)}/>

      </div>

    </div>
  )
}
export default Slider