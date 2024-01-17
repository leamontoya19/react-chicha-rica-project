import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
