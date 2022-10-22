import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IncomePage from './components/IncomePage/IncomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <IncomePage />
    </div>
  )
}

export default App
