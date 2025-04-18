import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
function App() {
  return (
    <>
    <h1 className='header'>集中 (Shūchū) | Pomodoro Timer </h1>
    <h3>😳Sensei, Your time in this world is running out!</h3>
    <h4>🥷You have to 集中 (Shūchū)</h4>
    <Timer></Timer>
    </>
  )
}

export default App
