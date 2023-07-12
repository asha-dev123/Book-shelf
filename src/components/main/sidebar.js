import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
import logo1 from '../../components/asserts/Logo.png'
import home from '../../components/asserts/home.svg'
import search from '../../components/asserts/Search.svg'
import mybooks from '../../components/asserts/Bookshelf.svg'
function Sidebar(){
    return(
           <div>
               <div className="sidebar-1">
                  
                    <img className="home-img-1" src={logo1}></img><br></br>
                     <div className="side-box-1">
                           <Link className="link"  to="/"><img className="img-11" src={home}  />Home</Link>
                           <Link  className="link" to="/search"><img className="img-11" src={search}  />Search</Link>
                           <Link className="link" to="/cart"><img className="img-11" src={mybooks}  />My Shelf</Link>
                     </div>
                  
                     
                     
               </div>
           </div>
    )
}

export default Sidebar;