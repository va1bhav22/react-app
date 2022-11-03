import React from 'react'
import {Routes,Route} from "react-router-dom"
import CartPage from '../Pages/CartPage'
import DiscriptionPage from '../Pages/DiscriptionPage'
import HomePage from '../Pages/HomePage'
import Navbar from '../Pages/Navbar'
const MainRouts = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} ></Route>
        <Route path='/disc/:id' element={<DiscriptionPage />} ></Route>
        <Route path='/cart' element={<CartPage />} ></Route>
      </Routes>
    </>
  )
}

export default MainRouts