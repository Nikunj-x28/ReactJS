import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter , setCounter] = useState(5);   // accepts default value of state
  // let counter = 5; -> this varibale wont be propagated to User Interfaces
  const addValue = () =>{
  //  counter = counter +1;
   setCounter(counter + 1)
  }
  const removeValue = () => {
    if(counter > 0)  {
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Hey man</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br/><br/>
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
