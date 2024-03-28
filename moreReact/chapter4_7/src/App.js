import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
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
    const [userName,setUserName] = useState();
    return(
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
          <div className="app">
              <Header/>
              {/* this outlet is basically replaced by the respective children */}
              <Outlet/>
          </div>
        </UserContext.Provider>
      </Provider>
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
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu/>
        }
      ],
      errorElement:<Error/>
    }
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// REACT render expects a component so we cannot directly write appRouter
// RouterProvider provides route context to all the descendent components.
root.render(<RouterProvider router={appRouter}/>)
