// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAp5-DrRT5PdPZXd5ruNhyY729fiL4yxRI",

  authDomain: "tidy-landing-138923.firebaseapp.com",

  databaseURL: "https://tidy-landing-138923.firebaseio.com",

  projectId: "tidy-landing-138923",

  storageBucket: "tidy-landing-138923.appspot.com",

  messagingSenderId: "998366945335",

  appId: "1:998366945335:web:1fea78a5f55a1d8f361fb2"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };