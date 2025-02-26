import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../assets/Pages/Home/Home";
import Login from "../assets/Pages/Login/Login";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
     
    },
  ]);