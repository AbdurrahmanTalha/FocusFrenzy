import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import "./App.css"
import Footer from './Components/Global/Footer.js';


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    }
  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Footer></Footer>
    </div>
  );
};

export default App;
