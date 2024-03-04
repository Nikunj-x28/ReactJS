// normal browser scripts cannot have this import
import React from "react";
import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent2 = React.createElement("div",{id:"parent2"},
                    React.createElement("div",{id:"child2"},
                        [
                            React.createElement("h1",{},"Hello guys"),
                            React.createElement("h2",{},"Bye guys")
                        ]
                    )   
                )

root.render(parent2)
