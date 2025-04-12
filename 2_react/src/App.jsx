import { useState } from 'react'
import './App.css'

function App() {

  let [count , setCount] = useState(10);


  const addvalue = () => {
    if(count < 20){
      count = count + 1;
      setCount(count);
    }
  }

  const removeValue = () => {
    if(count > 0){
      count = count -1;
      setCount(count);
    }
  }

  return (
    <>
      <h1>Counter : {count}</h1>

      <br/>

      <button
      onClick={addvalue}>Add</button>

      <br/>
      <br/>

      <button
        onClick = {removeValue}
      >Remove</button>
      
    </>
  )
}

export default App
