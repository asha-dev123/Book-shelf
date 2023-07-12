
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAGUGzPbu_4il6RCAlIxaTPuvw_Z4f_hTE",
  authDomain: "bookstore-7780d.firebaseapp.com",
  projectId: "bookstore-7780d",
  storageBucket: "bookstore-7780d.appspot.com",
  messagingSenderId: "572447048632",
  appId: "1:572447048632:web:b4ac2f29f538d89e85054d",
  measurementId: "G-KNC5EZDMTV"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provide = new GoogleAuthProvider();
export {app,auth,provide};