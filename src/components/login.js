import React, { useEffect, useState } from "react";
import { auth, provide } from "./config";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

import Home from "./api";

function Login() {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provide)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
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
      {value ? (
        <Home />
      ) : (
        <div>
          <button onClick={handleClick}>Login with Google</button>
          <button onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
      )}
    </div>
  );
}

export default Login;
