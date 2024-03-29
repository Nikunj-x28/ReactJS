// PART 1
const heading = React.createElement(// type of the element
"h1", // theses are the attributes of this element
{
    id: "heading",
    style: {
        color: "red"
    }
}, //  children of the element
"Hello world!");
// React createElement makes a JS object
const root = ReactDOM.createRoot(document.getElementById("root"));
// render method parses the JS objects  => root.render(heading);
// ----------------------------------------------------------------------------------------------------------
/*
PART 2
display the following in react

<div id="parent">
    <div id="child">
        <h1></h1>
    <div/>
<div/>
*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "Hello guys")));
/*
display the following in react

<div id="parent2">
    <div id="child2">
        <h1></h1>
        <h2></h2>
    <div/>
<div/>
*/ const parent2 = React.createElement("div", {
    id: "parent2"
}, React.createElement("div", {
    id: "child2"
}, [
    // to add more than one children use an array
    React.createElement("h1", {}, "Hello guys"),
    React.createElement("h2", {}, "Bye guys")
]));
root.render(parent2) /*
display the following in react

<div id="parent3">
    <div id="child3">
        <h1></h1>
        <h2></h2>
    <div/>
    <div id="child4">
        <h1></h1>
        <h2></h2>
    <div/>
<div/>
*/  // we could make this nested structure, but it will be messier.
 // solution => JSX
;

//# sourceMappingURL=react.6bd02f5a.js.map
