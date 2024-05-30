import { initializeApp } from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXlf9KmvaaD1_TcLi5jw48f6UsxvlFPv0",
  authDomain: "authapp-f1051.firebaseapp.com",
  projectId: "authapp-f1051",
  storageBucket: "authapp-f1051.appspot.com",
  messagingSenderId: "512390252003",
  appId: "1:512390252003:web:e394b527ca141b5c754cd6",
  measurementId: "G-13B4Z3XXW3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
