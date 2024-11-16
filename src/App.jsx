import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Pages from './Pages/Pages'
import Home from './Pages/Home/Home'
import Lox from './lox/Lox'
import Tours from './Pages/tours/Cards'

const App = () => {
  return (
    <Lox>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cards/:CardId" element={<Tours/>}/>
      </Routes>
    </Lox>
  )
}

export default App
