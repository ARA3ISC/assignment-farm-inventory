import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Wrap from './components/wrap'
import AddItem from './components/AddItem'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='container mx-auto my-6'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Wrap />} />
          <Route path='/additem' element={<AddItem />} />
        </Routes>
      </div>

    </>
  )
}

export default App
