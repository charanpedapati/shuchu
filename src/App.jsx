import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
function App() {
  return (
    <>
    <h1 className='header'>Pallavi's Pomodoro Timer </h1>
    <h3>My dear potato, you have to study a lot. Use this timer and start Shuchuing! :)</h3>
    <h4>Come on, you can do it. Start now 👇</h4>
    <Timer></Timer>
    </>
  )
}

export default App
