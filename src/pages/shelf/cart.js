// import React, { useState } from 'react';

// function Cart() {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <div>
//         abhi
//       {cartItems.map((item) => (
//         <div key={item.id}>{item.name}</div>
//       ))}
//     </div>
//   );
// }

// export default Cart;
import React from 'react';

function Cart({ cartItems }) {
  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image_url} alt={item.title} />
          <p>{item.title}</p>
          <p>{item.authors}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;

