import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
function App() {
  return (
    <>
    <h1>集中 (Shūchū) | Pomodoro Timer </h1>
    <h3>Time is running out, Please Shūchū 🍅</h3>
    <Timer></Timer>
    </>
  )
}

export default App
