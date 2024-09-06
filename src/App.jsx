import React from 'react'
import './App.css'
import Counter from './Components/Counter'
import Theme from './Components/Theme'
import "./Components/counter.css"

function App() {

  return (
    <>
      <Theme />
      <div style={{
        position: "absolute", top: "32%", left: "39%", border: "1px solid grey", width: "30%", borderRadius: '20px', cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
      }}>
        <Counter />
      </div >
    </>
  )
}

export default App
