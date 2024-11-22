
import * as React from "react";
import { useState } from 'react';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Outlet } from "react-router-dom";
import "./App.css"
import "./Routes.css"
// import "./Slider.css"
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
// import Navbar from "./components/Navbar";

import { useEffect } from "react"
import Navbar from "./components/Navbar";
import Upcoming from "./routes/Upcoming";
import Recording from "./routes/Recording";
import Admin from "./routes/Admin";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Footer from "./components/Footer";
import "./Phone.css"
import Login from "./routes/login";
import Listen from "./routes/Listen";






const App = () =>{
  const[userData,setUserData]=useState([])
  
  
 
  return(
    <>
    <div className="siteContainer">
      <Navbar/>
      <Outlet context={[userData,setUserData]}/>
      <Footer/>
      
    </div>
    </>
  )
}



const router = createBrowserRouter([
  {
    
    
    element: <App/>,
  errorElement: <ErrorPage/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path: "/shows",
        element: <Upcoming/>
      },{
        path: "/recording",
        element: <Listen/>
      },{
        path: "/Admin",
        element: <Login/>
      },{
        path: "/About",
        element: <About/>
      },{
        path: "/Contact",
        element: <Contact/>
      }
      
      
    ]
  }
  
  

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
