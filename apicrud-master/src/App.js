import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Create from './Components/Create'
import Update from './Components/Update'
import Read from './Components/Read'

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
          <Route path='/read/:id' element={<Read></Read>}></Route>
        </Routes>
      </Router>
    </div>
  )
}
