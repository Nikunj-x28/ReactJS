import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login.jsx"
import Signup from "./Signup.jsx";
import Error from "./Error.jsx";
import Home from "./Home.jsx";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  const Homepage = ()=>{
    return(
      <div className="bg-gray-400 flex justify-center items-center
      h-screen">
            <div className="bg-white text-center w-60 h-44 px-4 py-2 flex justify-between items-center
            rounded-lg"> 
            <Link  to="./signup" className="p-2 bg-blue-300 rounded-md h-fit mx-2">
                <button> Signup </button>
            </Link>
            <Link  to="./login" className="p-2 bg-blue-300 rounded-md h-fit mx-2">
                <button> Login </button>
            </Link>
            </div>
        </div>
    );
  }
  const appRouter = createBrowserRouter(
    [
          {
            path:"/",
            element:<Homepage/>,
            errorElement:<Error/>
          },
          {
            path:"/signup",
            element:<Signup/>,
            errorElement:<Error/>
          },
          {
            path:"/login",
            element:<Login/>,
            errorElement:<Error/>
          },
          {
            path:"/home",
            element:<Home/>,
            errorElement:<Error/>
          }
    ]
  )
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App
