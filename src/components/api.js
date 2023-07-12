import React, { useEffect, useState } from 'react';
import './api.css';

const MyComponent = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://example-data.draftbit.com/books?_limit=50&q=${searchTerm}`
      );
      const jsonData = await response.json();
      setData(jsonData);
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

  const handleAddToCart = (itemId) => {
    console.log(`Item ${itemId} added to cart`);
  };

  return (
    <div>
      <h2>My Component</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="box-1">
        {data.map((item) => (
          <div key={item.id}>
            <img className="image1" src={item.image_url} alt={item.title} />
            <p>{item.title}</p>
            <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
