import React from "react";
import { useState } from "react";
import logo from "../../components/asserts/Logo.png"
import "./login.css"
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import app from "../../components/config"

function Signup() {
   
    
    const auth = getAuth();
    const [password, setPassword] = useState(" ");
    const [email, setEmail] = useState(" ");
   
    const signup = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            alert("created an account")
           
            
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
            
        });

    }
    
    return (
        <div>

            <div className="login-box-1">

                <img className='img-1' src={logo}></img>
                <p className="p1">Registration</p>
                <p className="p2">For Both Staff & Students</p>
                <div className="inner-box-1">
                    <label className="label-1">Name</label>
                    <input className="input-1" type="text" placeholder="Name"></input>
                   
                    <label className="label-1">College Email ID</label>
              
                    <input className="input-1" type='email' onChange={(e) => setEmail(e.target.value)} />
                    <label className="label-1">Password</label>
                    <input className="input-1" type='password' onChange={(e) => setPassword(e.target.value)} />
                    <label className="label-1">Confirm Password</label>
                    <input className="input-1" type="mail" placeholder="•••••••••" ></input>

                    <button className="button-1" onClick={signup}>Register</button>
                    <div className="inner-box-3">
                        
                        <p className="p3">Already a User?<Link className="link-1" to="/login">Login now</Link></p>
                        <p className="p3">Use as Guest </p>
                    </div>


                </div>






            </div>

        </div>

    )
}

export default Signup;