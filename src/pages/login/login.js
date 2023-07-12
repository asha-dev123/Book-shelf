import React from "react";
import { useState, useEffect } from "react";
import logo from "../../components/asserts/Logo.png"
import "./login.css"
import app from "../../components/config"
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provide } from "../../components/config";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {


  const auth = getAuth();
  const [password, setPassword] = useState(" ");
  const [email, setEmail] = useState(" ");
  const navigateto = useNavigate();
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        navigateto("/")

      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode)
      });

  }
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provide)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        navigateto("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookLogin = () => {
    const provider = new FacebookAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setValue(user.email);
        localStorage.setItem("email", user.email);
        navigateto("/")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>

      <div className="login-box-1">

        <img className='img-1' src={logo}></img>
        <p className="p1">Welcome Back !</p>
        <p className="p2">Sign in to continue to yourDigital Library</p>
        <div className="inner-box-1">
          <div className="inner-inner-box-1">
            <label className="label-1">Email</label><br></br>
            <input className="input-1" type="mail" placeholder="username@collegename.ac.in" onChange={(e) => setEmail(e.target.value)}></input><br></br>
            <label className="label-1">Password</label><br></br>
            <input className="input-1" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="•••••••••"></input>
            <div className="inner-box-2">
              <div className="checkbox">
                <input type="checkbox"></input>
                <label>Remember me</label>
              </div>
              <div className="forgot">
                <a></a>
                <a href="/">Forgot password?</a>
              </div>

            </div>
          </div>

          <div inner-inner-box-2>
            <button className="button-1" onClick={login}>Login</button>
            <p className="or">(or)</p>
            <div className="btn-1">
              <button className="button-2" onClick={handleClick}>Login with Google</button>
              <button className="button-2" onClick={handleFacebookLogin}>Login with FB</button>
            </div>
          </div>


         



        </div>


        <div className="inner-box-3">
            <p className="p3">New User?<Link className="link-1" to="/signup">Register Here</Link></p>
            <p className="p3">Use as Guest </p>
          </div>



      </div>

    </div>

  )
}

export default Login;