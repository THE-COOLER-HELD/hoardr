import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IncomePage from './components/IncomePage/IncomePage'
import Homepage from './components/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Homepage />
    </div>
  )
}

export default App
