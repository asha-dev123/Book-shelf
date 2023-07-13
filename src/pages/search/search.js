import React, { useEffect, useState } from 'react';
import Sidebar from "../../components/main/sidebar";
import '../search/search.css'
function Search() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);

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
    <div className='container-1'>
      <div className="search-container">

        <div className='search-box-1'>
          <Sidebar></Sidebar>
        </div>



        <div className="search-box-2">
          <form onSubmit={handleSearch}>
            <input
              className="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
          </form>

          <select className='droupwown-1'>
            <option value="all">All Genre ▾</option>

            <option value="author2">Romantic</option>
            <option value="author3">History</option>
            <option value="author1">Fiction</option>
            <option value="author3">Self-Help</option>
          </select>
          <div className='search-titles'>
            <p className='ppp-1'>Title</p>
            <p className='ppp-1-2'>Ratings</p>
            <p className='ppp-1-3'>Format</p>

          </div>
          <div className="search-books">

            {data.map((item) => (
              <div className="search-book-1" key={item.id}>
                <img
                  className="image2"
                  src={item.image_url}
                  alt={item.title}
                />

                <div className='search-books-10'>
                  <div className='s-box'>
                    <p className="title-s">{item.title}</p>
                    <p className="title-2-s">{item.authors}</p>
                    <p className='title-3-s'>{item.edition}</p>
                  </div>

                  <div className='add-box'>
                    <p className="title-4-s">{item.rating}/5</p>
                  </div>
                  <div className='add-box-1'>
                    <p className="title-4-s">{item.format}</p>
                  </div>
                  <div className='class-200'>
                    <button
                      className='add-btn-1'
                      onClick={() => handleAddToCart(item)}
                    >
                      Add To Cart
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Search;