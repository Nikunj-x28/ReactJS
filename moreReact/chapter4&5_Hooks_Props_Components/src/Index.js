import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js"
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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)