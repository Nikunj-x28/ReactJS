import Hello from './components/hello'
import Bye from './components/Bye'
import './App.css'
import React from 'react'

function App() {
  const reactElement = React.createElement(
    'a', // type
    {href:'https://google.com', target: '_blank'}, // attributes
    <button>Click Me</button>, // children
  )
  const usersFromDatabase = ["Anshul","Srushti","Nikhil","Saransh"];
  return (
    <>
      {/* first way to add components */}
      {/* we pass props to our custom components to make them dynamic and reusable*/}
      {/* strings can be passed by putting them in quotes */}
      {/* other data can be passed using {} syntax */}
      <Hello name="Nikunj"/>
      <Bye name="Nikunj"/>

      {/* second way */}
      {reactElement}

      {/* injecting components based upon a list */}
      <ul>{
        // When you render a list of components using a map function, React needs
        // a way to identify each component uniquely within the list. The key prop serves
        // this purpose. It helps React's reconciliation algorithm understand which items have changed,
        // been added, or been removed.
        usersFromDatabase.map((user,index) =>{
          return <Hello key={index} name={user}/>
        })
      }
      </ul>
    </>
  )
}

export default App
