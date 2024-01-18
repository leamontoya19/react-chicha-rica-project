import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AnimatedCard from './components/AnimatedCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AnimatedCard/>
    </>
  )
}

export default App
