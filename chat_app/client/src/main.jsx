import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBrUBVlcZFbloEvYTkEJiHzozSS9qFqf8k",
  authDomain: "chat-app-18cb3.firebaseapp.com",
  projectId: "chat-app-18cb3",
  storageBucket: "chat-app-18cb3.appspot.com",
  messagingSenderId: "9204198516",
  appId: "1:9204198516:web:6510c6bf215a9bca9ff521"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is signed in');
    const userString = JSON.stringify(user, (key, value) => {
      if (value === undefined) {
        return null;
      }
      return value;
    });
    localStorage.setItem('user', userString);
  } else {
    console.log('User is signed out');
    localStorage.removeItem('user');
  }
});

export const data = { auth };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
