import { useState } from 'react'
import './App.css'
import Pallete from './components/pallete'

function App() {
  let [clr , setclr] = useState('#000000');


let colorarr1 = ['#000000', '#1a1a1a', '#333333', '#4d4d4d', '#666666', '#808080', '#999999', '#b3b3b3', '#cccccc', '#ffffff'];
let colorarr2 = ['#2b0000', '#4c0000', '#660000', '#800000', '#990000', '#b30000', '#cc3333', '#e06666', '#f29c9c', '#ffd6d6'];
let colorarr3 = ['#330000', '#660000', '#800000', '#990000', '#b30000', '#e60000', '#ff3333', '#ff6666', '#ff9999', '#ffcccc'];
let colorarr4 = ['#331900', '#663300', '#994d00', '#cc6600', '#ff8000', '#ff9933', '#ffb366', '#ffcc99', '#ffe0cc', '#fff2e6'];
let colorarr5 = ['#333300', '#666600', '#999900', '#cccc00', '#ffff00', '#ffff33', '#ffff66', '#ffff99', '#ffffcc', '#ffffe6'];
let colorarr6 = ['#1a3300', '#336600', '#4d9900', '#66cc00', '#80ff00', '#99ff33', '#b3ff66', '#ccff99', '#e6ffcc', '#f2ffe6'];
let colorarr7 = ['#002000', '#004000', '#006000', '#008000', '#00A000', '#00C000', '#00E000', '#20FF20', '#60FF60', '#A0FFA0'];
let colorarr8 = ['#003333', '#006666', '#009999', '#00cccc', '#00ffff', '#33ffff', '#66ffff', '#99ffff', '#ccffff', '#e6ffff'];
let colorarr9 = ['#001f33', '#003f66', '#005f99', '#007fcc', '#009fff', '#33b2ff', '#66c5ff', '#99d9ff', '#ccecff', '#e6f7ff'];
let colorarr10 = ['#000020', '#000040', '#000060', '#000080', '#0000A0', '#0000C0', '#0000E0', '#2020FF', '#6060FF', '#A0A0FF'];
let colorarr11 = ['#1a0033', '#330066', '#4d0099', '#6600cc', '#8000ff', '#9933ff', '#b366ff', '#cc99ff', '#e6ccff', '#f2e6ff'];
let colorarr12 = ['#33001a', '#660033', '#99004d', '#cc0066', '#ff0080', '#ff3399', '#ff66b3', '#ff99cc', '#ffcce6', '#ffe6f2'];
let colorarr13 = ['#331a00', '#663300', '#804000', '#996600', '#b37700', '#cc8800', '#e69900', '#ffb84d', '#ffcc80', '#ffe6cc'];
let colorarr14 = ['#1a1a2e', '#2e2e3e', '#444454', '#59596b', '#6f6f82', '#858599', '#9a9ab0', '#b0b0c7', '#c6c6de', '#dbdbf4'];



  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center items-center min-h-screen'>
        {/* display and output container */}
        <div className='flex flex-col min-w-90'>
          {/* diplay */}
          <div className='text-black w-50 h-50 border-black border-xl rounded-lg ml-[50%] translate-x-[-50%] mt-20 mb-5 shadow-lg shadow-black' style={{backgroundColor : clr}}></div>
          {/* output */}
          <div className='bg-white text-black font-bold h-10 w-70 mb-20 ml-[50%] translate-x-[-50%] rounded-lg shadow-lg shadow-black flex justify-center items-center'> {clr} </div>
        </div>

        {/* pallete container */}
        <div className='rounded-lg overflow-hidden min-w-100 shadow-xl shadow-black mt-10 mb-10'>
          <Pallete color = {colorarr1} setclr = {setclr}/>
          <Pallete color = {colorarr2} setclr = {setclr}/>
          <Pallete color = {colorarr3} setclr = {setclr}/>
          <Pallete color = {colorarr4} setclr = {setclr}/>
          <Pallete color = {colorarr5} setclr = {setclr}/>
          <Pallete color = {colorarr6} setclr = {setclr}/>
          <Pallete color = {colorarr7} setclr = {setclr}/>
          <Pallete color = {colorarr8} setclr = {setclr}/>
          <Pallete color = {colorarr9} setclr = {setclr}/>
          <Pallete color = {colorarr10} setclr = {setclr}/>
          <Pallete color = {colorarr11} setclr = {setclr}/>
          <Pallete color = {colorarr12} setclr = {setclr}/>
          <Pallete color = {colorarr13} setclr = {setclr}/>
          <Pallete color = {colorarr14} setclr = {setclr}/>
        </div>
      </div>
    </>
  )
}

export default App
