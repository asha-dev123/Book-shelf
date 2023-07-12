import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/main/sidebar";
import search1 from '../../components/asserts/Search1.svg';
import './home.css';
import { Link } from 'react-router-dom';
import Cart from '../shelf/cart';

function Home() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]); // Add this line

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://example-data.draftbit.com/books?_limit=9&q=${searchTerm}`
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
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData();
  };

  const handleAddToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div>
      <div className="home">
        <div className='content'>
          <Sidebar></Sidebar>
        </div>

        <div>
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
            <Link className='link-1' to="/login">
              <button className="button-2">Login</button>
            </Link>
          </div>
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
                <img
                  className="image1"
                  src={item.image_url}
                  alt={item.title}
                />
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
      <Cart cartItems={cartItems} /> 
    </div>
  );
}

export default Home;
