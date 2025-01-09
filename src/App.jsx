import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from "./Container/Login"
function App() {
  const [isLogedin, setLogedStatus] = useState(false)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Router>
  )
}

export default App
