import './App.css'
import dinu from './dinu.jsx'

function App() {

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <dinu />
    </React.StrictMode>,
  )
  return (
    
    <>
      <h1>Hello World!</h1>
      <button>click me !</button>
    </>
  )
}

export default App