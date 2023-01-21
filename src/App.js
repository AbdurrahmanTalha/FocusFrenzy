import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Home from './Pages/Home';
import "./App.css"


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
    </div>
  );
};

export default App;
