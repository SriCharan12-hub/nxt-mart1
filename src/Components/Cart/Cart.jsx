import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { increaseCount, decreaseCount, removing } from "../Slice";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const cardItems = useSelector((store) => store.Cartstate.cardItems);
  const navigate = useNavigate();

  // Save cart to localStorage whenever cardItems change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cardItems));
  }, [cardItems]);

  const emptylist = [];
  const qunatitylist = [];
  cardItems.forEach((each) => {
    const length = each.price.length;
    const integer = parseFloat(each.price.slice(1, length));
    const totalValue = each.cardquantity * integer;
    emptylist.push(totalValue);
    qunatitylist.push(each.cardquantity);
  });

  const TotalAmount = emptylist.reduce((acc, ref) => acc + ref, 0);
  const totalItems = qunatitylist.reduce((acc, item) => acc + item, 0);

  const adding = (item) => {
    dispatch(increaseCount(item));
  };

  const subtracting = (item) => {
    dispatch(decreaseCount(item));
  };

  const deleting = (item) => {
    dispatch(removing(item));
  };

  return (
    <div className="cart-container">
      <div className='Home-Nav'>
        <img
          src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1751948449/6fad20838855997d164dd88d885fad87bdfa3be6_qwzvhr.png"
          className='Home-image'
          onClick={() => { navigate('/home'); }}
        />
        <div className='Home-Nav1'>
          <h2 className='Home-1' onClick={() => navigate('/home')}>Home</h2>
          <h2 className='Home-1' onClick={() => navigate('/cart')}>Cart</h2>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => navigate('/')} width="50"  style={{ cursor: "pointer" }} height="50" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
        </div>
      </div>

      <div className="cart-full-width">
        {cardItems.length === 0 ? (
          <div className="empty-cart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="cart-icon">
              <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
            </svg>
            <p className="cart-para">Your Cart is Empty</p>
          </div>
        ) : (
          <div>
            <h1>Items</h1>
            <div className="cart-box">
              {cardItems.map((item, index) => (
                <div className="cart-item" key={index}>
                  <img src={item.image} alt={item.name} className="item-img" />
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <p>{item.weight}</p>
                    <h4>{item.price}</h4>
                    <h4>Total: ₹{parseFloat(item.price.slice(1)) * item.cardquantity}</h4>
                    <button className="remove-btn" onClick={() => { deleting(item); }}>Remove</button>
                  </div>
                  <div className="item-qty">
                    <button onClick={() => { subtracting(item); }}>-</button>
                    <span>{item.cardquantity}</span>
                    <button onClick={() => { adding(item); }}>+</button>
                  </div>
                </div>
              ))}

              <hr />
              <div className="cart-footer">
                <h3>Total ({totalItems} items): ₹ {TotalAmount}</h3>
                <button className="checkout-btn" onClick={() => {
                  window.scrollTo(0, 0);
                  navigate('/payment');
                }}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
             <footer className="footer">
               <div className="footer-content">
                 <p>
                   For any queries, contact <strong>+91-9876543210</strong><br />
                   or mail us <a href="mailto:help@nxtmart.co.in">help@nxtmart.co.in</a>
                 </p>
                 <div className="social-icons">
                   <FontAwesomeIcon className="social-icons1" icon={faFacebookF} />
                   <FontAwesomeIcon className="social-icons1" icon={faPinterestP} />
                   <FontAwesomeIcon className="social-icons1" icon={faTwitter} />
                   <FontAwesomeIcon className="social-icons1" icon={faInstagram} />
                 </div>
                 <p className="copyright">
                   Copyright © 2023 NxtMart Grocery Supplies Pvt Ltd
                 </p>
               </div>
             </footer>
    </div>
  );
}

export default Cart;
