import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './pages/login/login'
import Signup from './pages/login/signup'
import Home from './pages/home/home'
import Sidebar from './components/main/sidebar';
import Cart from './pages/shelf/cart.js';
import Search from './pages/search/search';


function App() {
  return (
    
      <Router  basename={process.env.PUBLIC_URL}>
        
      <Routes>
            <Route path='/' element={ <Home></Home>} />
            <Route path='/login' element={ <Login></Login>} />
            <Route path='/signup' element={ <Signup></Signup>} />
            <Route path='/cart' element={ <Cart></Cart>} />
            <Route path='/search' element={ <Search></Search>} />

            {/* <Route path='/shelf' element={ <Shelf></Shelf>} /> */}
      </Routes>
            {/* <MyComponent></MyComponent> */}
       {/* <Login></Login>
   
       <Signup></Signup> */}
       
        {/* <Sidebar></Sidebar> */}
        {/* <Home></Home> */}
        
      </Router>
     
 
    
  );
}

export default App;
