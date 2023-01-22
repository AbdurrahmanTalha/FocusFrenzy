import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './Components/Global/Navbar';
import Footer from './Components/Global/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* 
    <Footer></Footer> */}
  </React.StrictMode>
);
