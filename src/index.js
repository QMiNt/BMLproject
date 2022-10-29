
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
  const firebaseConfig = {
    apiKey: "AIzaSyBGFhsHFflmDeQk3v3GgmwmQYs0HHMrRaA",
    authDomain: "progviz-1280e.firebaseapp.com",
    projectId: "progviz-1280e",
    storageBucket: "progviz-1280e.appspot.com",
    messagingSenderId: "1003865554164",
    appId: "1:1003865554164:web:998e7d6ea8008406ee72a1",
    measurementId: "G-HVCY5KMTNH"
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);