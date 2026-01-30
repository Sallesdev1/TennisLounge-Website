import { useState } from 'react'
import './Index.css'
import { Navbar } from './components/Navbar'
import { Background } from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Background />
    </>
  )
}

export default App
