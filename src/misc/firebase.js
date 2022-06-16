import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC2d7fdoLwCuKF4wcNqoNg148TiBSzXZEQ",
  authDomain: "test-app-fef5f.firebaseapp.com",
  databaseURL: "https://test-app-fef5f-default-rtdb.firebaseio.com",
  projectId: "test-app-fef5f",
  storageBucket: "test-app-fef5f.appspot.com",
  messagingSenderId: "890605698893",
  appId: "1:890605698893:web:acba79450a3404a0bc0104"
};

const app = firebase.initializeApp(firebaseConfig);

