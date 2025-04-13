import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './comps/card.jsx'

function App() {
  let myobj = {
    name  : "yadav",
    age : 21,
    address : "jhajjar",
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-amber-950 , p-4 , rounded-xl'>Tailwind</h1>
      <Card name = "Dinu Yadav"/>
      <Card name = "User"/>
    </>
  )
}

export default App
