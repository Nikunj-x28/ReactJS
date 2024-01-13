import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-3 
      rounded mb-4'>Tailwind Test</h1>
      <Card userItem={"Ipad"}/>
    </>
  )
}

export default App
