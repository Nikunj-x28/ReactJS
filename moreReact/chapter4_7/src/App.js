import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
/*
Header
-logo
-Nav items
Body
-Search
-RestaurantContainer
  - RestaurantCard
   -img
   -name of res,Star rating , cuisine,delivery date
Footer
- Copyright
- Address
- Contact
*/
const AppLayout = ()=>{
    return(
        <div className="app">
            <Header/>
            {/* this outlet is basically replaced by the respective children */}
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ],
      errorElement:<Error/>
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
