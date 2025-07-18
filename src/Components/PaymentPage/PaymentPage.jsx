
import "./PaymentPage.css"
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';



function PaymentPage() {
    const navigate=useNavigate();
  return (
    <div>
      <div className='Home-Nav'>
        <img src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1751948449/6fad20838855997d164dd88d885fad87bdfa3be6_qwzvhr.png" className='Home-image'  onClick={()=>{navigate('/home')}}/>
        <div className='Home-Nav1'>
            <h2 className='Home-1' onClick={()=>{navigate('/home')}}>Home</h2>
            <h2 className='Home-1' onClick={()=>{navigate('/cart')}}>Cart</h2>
            <svg xmlns="http://www.w3.org/2000/svg"  onClick={()=>{navigate('/')}} style={{verticalAlign: 'middle', marginRight: '0px'}} width="50" height="50" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth="2" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1"/>
            </svg>
            

        </div>
      </div>
      <div className="tick">
      <img src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1752137996/Ellipse_1497_rrfy1e.png" className="payment-image1"/>
      <img src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1752138022/Vector_orbedn.png" className="payment-image2"/>
      </div>
      <div className="lag">
      <h2 className="payment-head">Payment SuccessFul</h2>
      <p className="payment-para1">Thanks for ordering.</p>
      <p className="payment-para2">Your Payment is successfully completed.</p>
      <div>
        <button className="payment-btn" onClick={()=>{navigate('/home')}}>Return to Home page</button>
      </div>
      </div>
       <footer className="footer footer1">
    <div className="footer-content">
      <p>For any queries, contact <strong>+91-9876543210</strong><br />
      or mail us <a href="mailto:help@nxtmart.co.in">help@nxtmart.co.in</a></p>

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
  )
}

export default PaymentPage

