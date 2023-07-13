import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/main/sidebar";
import search1 from '../../components/asserts/Search1.svg';
import './home.css';
import { auth } from '../../components/config';
import { Link, Navigate } from 'react-router-dom';
// import Cart from '../shelf/cart';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState(" ");

  const navigate = useNavigate();
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://example-data.draftbit.com/books?_limit=40&q=${searchTerm}`
      );
      const jsonData = await response.json();


      const filteredData = jsonData.filter(
        (item) => !item.title.toLowerCase().includes('harry potter')
      );

      setData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    fetchData();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       
        setEmail(user.email);
      } else {
        
        setEmail('');
      }
    });
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handlelogout = () => {
    auth.signOut();
    alert("logged out")
    navigate("/login");


  }

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div className='container'>
      <div className="home">
        <div className='content'>
          <Sidebar></Sidebar>
        </div>

        <div className='content-1'>
          <div className="home-box-1">
            <form onSubmit={handleSearch}>
              <input
                className="search"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
              />
            </form>

            <div>
              {auth.currentUser ? (
                <div>

                  <button onClick={handlelogout} className="button-2">Logout</button>

                </div>) : (<Link className='link-1' to="/login">
                  <button className="button-2">Login</button>
                </Link>)}
            </div>
 
          </div>
          <div className='good'>{email}</div>
          <div className="home-box-2">
            <div className="box-100">
              <p className="pp-1">Today’s Quote</p>
              <p className="pp-2">
                “There is more treasure in books than in all the pirate’s loot
                on Treasure Island.”
              </p>
              <p className="pp-3">-Walt Disney</p>
              <div className="dots">
                <p className="dot-1">•</p>
                <p className="dot-2">•</p>
                <p className="dot-2">•</p>
                <p className="dot-2">•</p>
              </div>
            </div>
            <div className="box-101">
              <div class="vertical-text">
                <span class="text">New Arrivals</span>
              </div>
              <div className="box-103">
                {data.slice(5, 8).map((item) => (
                  <img
                    className='image-11'
                    key={item.id}
                    src={item.image_url}
                    alt={item.title}
                  />
                ))}
                <div />
              </div>
            </div>
          </div>
          <h1>Good Morning</h1>

          <p className="p-11">Recommended for You</p>
          <div className="books">
            {data.map((item) => (
              <div className="book-1" key={item.id}>
                <Link to=""> <img className="image1" src={item.image_url} alt={item.title} /></Link>

                <p className="title">{item.title}</p>
                <p className="title-1">{item.authors}</p>
                <div className='add-box'>
                  <p className="title-2">{item.rating}/5</p>
                  <button
                    className='add-btn'
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <Cart cartItems={cartItems} />  */}
    </div>
  );
}

export default Home;
