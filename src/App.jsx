import { Route, Routes } from 'react-router-dom'
import Home from '.content/Home'
import Header from './content/Header'
import Buttons from './content/Buttons'
import Form from './content/Formfield'
import Inputs from './content/Inputs'
import Navigation from './content/Navigation'
import Overlay from './content/Overlay'
import Presentation from './content/Prensentation'
import Visuals from './content/Visuals'
import Footer from './content/Footer'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/form" element={<Form />} />
          <Route path="/inputs" element={<Inputs />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/overlay" element={<Overlay />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/visuals" element={<Visuals />} />
          
      </Routes>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

export default App
