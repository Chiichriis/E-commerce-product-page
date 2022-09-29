import Order from "./Order";
import './scss/Siderbar.css';

const SideBar = ({ count, add, subtract, cartDisplay}) => {

  

  return (
    <div className='sidebar'>

      <div className="sidebar-wrap">
          <p className="company-id">sneaker company</p>

          <h1 className="sidebar-header">fall limited edition sneakers</h1>

          <p className="sidebar-txt">These low-profile sneakers are you perfect casuaal wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

          <div className="pricing">

            <div className="new-offer">
              <h1>$125.00</h1>
              <p className="discount">50%</p>
            </div>

            <p className="oldPrice">$250.00</p>
          </div>

          <Order count={count} add={add} subtract={subtract} cartDisplay={cartDisplay} />
      </div>

    </div>
  )
}

export default SideBar