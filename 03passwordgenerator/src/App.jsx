import { useState , useCallback , useEffect , useRef } from 'react'
import './App.css'

function App() {
  let [password , setPassword] = useState("Dinesh-Yadav");
  let [length , setLength] = useState(8);
  let [spCharAllowed , setSpCharAllowed] = useState(false);
  let [numAllowed , setNumAllowed] = useState(false);

  // useRef hook
  let passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "";
    let charlist = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed){
      charlist += "1234567890";
    }
    if(spCharAllowed){
      charlist += "@#$&*><_/";
    }

    for(let i = 0 ; i<length ; i++){
      let listPosition = Math.floor(Math.random()*charlist.length);

      pass += charlist.charAt(listPosition);
    }

    setPassword(pass);

  } , [length , spCharAllowed , numAllowed , setPassword])
  // generator function call
  useEffect(()=>{passwordGenerator()} , [length , numAllowed , spCharAllowed , passwordGenerator])


  const copyPassword = useCallback( () =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } , [password])


  return (
    <>
      <h1 className='text-white font-bold text-3xl md:text-5xl text-center mt-10'>Password Generator</h1>
      {/* main container */}
      <div className='w-100 md:w-200 lg:w-250 md:h-80 bg-slate-500 rounded-lg ml-[50%] translate-x-[-50%] mt-20 p-5 shadow-xl shadow-black'>
        {/* password field and copy button container */}
        <div className='bg-white min-w-90 md:w-140 md:h-15 rounded-lg overflow-hidden md:flex ml-[50%] translate-x-[-50%] shadow-lg shadow-black'>
          {/* password field */}
          <input
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
          className='bg-slate-200 w-90 md:w-100 h-15 flex items-center justify-center text-center font-mono text-xl outline-none'
          />
          {/* copy button */}
          <div className='bg-slate-800 md:w-40 h-15 text-white text-2xl font-bold flex items-center justify-center hover:bg-slate-600' onClick={copyPassword} >copy</div>
        </div>

        {/* bottom container */}
        <div className='bg-slate-200 rounded-xl min-w-80 md:w-120 lg:w-200 h-45 ml-[50%] translate-x-[-50%] mt-5 p-10 gap-5'>
          {/* range selector */}
          <div className='mx-5 text-2xl font-bold text-slate-800'>
            <input id='range' type='range' min={6} max = {30} value = {length} className="cursor-grab" onChange={ (event) => {setLength(event.target.value)}}  /> <label id='range'>length : {length}</label>
          </div>
          {/* nu,bers checkbox */}
          <div className='ml-5 mt-2 font-bold text-slate-800'>
            <input id='numbers' type='checkbox' className='' onChange={(event) => {setNumAllowed( (prev) => !prev )}}/> <label htmlFor='numbers'>Include Numbers</label>
          </div>
          {/* charcter checkbox */}
          <div className='ml-5 font-bold text-slate-800'>
            <input id='chars' type='checkbox'  onChange={(event) => {setSpCharAllowed( (prev) => !prev )}} /> <label htmlFor='chars'>Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
