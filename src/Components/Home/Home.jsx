import React, { useEffect, useState } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { addToTask } from '../Slice';
import Categories from '../Categories/Categories';
import Cookies from 'js-cookie';

function Home() {
  const [data, setData] = useState(null);
  const [allvalues, setAllvalues] = useState(null);
  const [click1, setClick] = useState(null);
  const [categorieslist, setCategorieslist] = useState("All-categories");
  const [expandedCategories, setExpandedCategories] = useState([]); // NEW

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://apis2.ccbp.in/nxt-mart/category-list-details");
      const result = await res.json();
      setData(result.categories);
      setAllvalues(result.categories);
    }
    fetchCategories();
  }, []);

  const functionHanlde = (eacharray) => {
    dispatch(addToTask(eacharray));
  };

  const removetoken = () => {
    Cookies.remove("jwttoken");
    navigate('/');
  };

  const categories1 = (eachdata) => {
    setClick(eachdata.name === "All-categories" ? null : eachdata.name);
    setCategorieslist(eachdata.name);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleCategoryExpand = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div>
      {/* Navbar */}
      <div className='Home-Nav'>
        <img
          src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1751948449/6fad20838855997d164dd88d885fad87bdfa3be6_qwzvhr.png"
          className='Home-image'
          onClick={() => navigate('/home')}
        />
        <div className='Home-Nav1'>
          <h2 className='Home-1' onClick={() => navigate('/home')}>Home</h2>
          <h2 className='Home-1' onClick={() => navigate('/cart')}>Cart</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={removetoken}
            width="50"
            height="50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
            style={{ cursor: "pointer" }}
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
        </div>
      </div>

      <div className='Home-main'>
        <Categories
          click1={click1}
          data={data}
          categories1={categories1}
        />

        <div className='Home-con-2'>
          {
            allvalues === null ? (
              <img
                src="https://res.cloudinary.com/dedmnd9gb/image/upload/v1752135229/Group_936_fve1x4.png"
                className='loading-image'
              />
            ) : (
              (click1 === null ? allvalues : allvalues.filter(each => each.name === categorieslist)).map(eachvalue => {
                const isExpanded = expandedCategories.includes(eachvalue.id);
                const displayedProducts = isExpanded ? eachvalue.products : eachvalue.products.slice(0, 3);

                return (
                  <div key={eachvalue.id}>
                    <span className='category-name'>{eachvalue.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className='icon12'>
                      <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>

                    <div className='arranging1'>
                      {displayedProducts.map(eacharray => (
                        <div className='arranging' key={eacharray.id}>
                          <div className='styling'>
                            <img className="images" src={eacharray.image} alt={eacharray.name} />
                            <div className='free'>
                              <h2>{eacharray.name}</h2>
                              <h3>{eacharray.weight}</h3>
                              <h3>{eacharray.price}</h3>
                            </div>
                          </div>
                          <div>
                            <button onClick={() => functionHanlde(eacharray)} className='addbtn'>Add</button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* View All / View Less Button */}
                    {eachvalue.products.length > 3 && (
                      <div style={{ textAlign: "center", marginBottom: "30px" }}>
                        <button className='viewbtn'
                          onClick={() => toggleCategoryExpand(eachvalue.id)}
                          style={{
                            backgroundColor: "#1dccebff",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            cursor: "pointer",
                           
            

                          }}
                        >
                          {isExpanded ? "View Less" : "View All"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )
          }
        </div>
      </div>

      {/* Footer */}
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

export default Home;
