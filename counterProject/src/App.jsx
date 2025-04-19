import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setcounter] = useState(10);

  const add = () => {
    setcounter(counter + 1);
    console.log(counter)
  }

  const remove = () => {
    setcounter(counter - 1);
  }

  const reset = () => {
    setcounter(counter = 10);
  }

  return (
    <>
      <h1>Counter : {counter} </h1>
      <br/>
      <button
        onClick={add} id='add'
      >Add</button>
      <button
        onClick={remove} id='remove'
      >Remove</button>
      <button
        onClick={reset} id='reset'
      >Reset</button>
    </>
  )
}

export default App
