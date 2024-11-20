import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Lox from './lox/Lox'
import Tours from './Pages/tours/Cards'
// import Login from './Login'

const App = () => {



  return (
    <>
 {/* <Login/>   */}
    <Lox>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Cards/:CardId" element={<Tours/>}/>
      </Routes>
    </Lox>
    </>
  )
}

export default App
