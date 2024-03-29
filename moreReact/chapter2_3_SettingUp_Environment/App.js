// normal browser scripts cannot have this import
import React from "react";
import ReactDOM from "react-dom/client";
import Index from "./Index";
const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const jsxElement = <h1>Hello, world!</h1>;
// After compilation with Babel(JSX transformer), this JSX code would be transformed into:
const reactElement = React.createElement('h1', null, 'Hello, world!');


//React Component
const heading =(
    <h1>why so magic</h1>
)

// REACT functional component
// a normal JS function which returns some JSX
const HeadingComponent = () => (
        <div>
             {/*component composition */}
             {/* can also write like this -> <Title> </Title> */}
            <Title/>
            
            <h1>Hello woooooo</h1>
        </div>
)
const Title =()=>(
    <h1>
        no no no 
        <Index/>
    </h1>
);

const number=100
const Test = () => (
    <div>
    {/* we can write any JS expression inside the curly braces in JSX */}
        {number}
        <br/>
        {"nom nom"}
        <br/>
        {100-390}
        <br/>
        {Title()}
        {heading}
        <HeadingComponent/>
    </div>
)
// component in component -> valid
// const Fun1 = () => <h1>Num Num</h1>
// const Fun2 = () =>{
//     <Fun1/>
//     <h2>Pro Pro</h2>
// }

// ReactElement in ReactElement -> valid
// const Fun1 = <h1>Num Num</h1>  (JSX is nothing but a react element)
// const Fun2 = (
//             <div>
//                  as we are writig in JSX we need to use {} to insert reactelement(as its just a JS object)
//                 {Fun1}
//             </div>
// )

// ReactElement in component -> valid
// const Fun1 = <h1>Num Num</h1
// const Fun2 = () =>{
//     {Fun1}
//     <h2>Pro Pro</h2>
// }
    
// component in ReactElement -> valid
// const Fun1 = () => <h1>Num Num</h1>
// const Fun2 = (
//             <div>
//                  <Fun1/>
//             </div>
// )



// syntax of rendering a component
// 1) root.render(HeadingComponent())
// 2) root.render(<HeadingComponent/>)
root.render(<Title/>)
