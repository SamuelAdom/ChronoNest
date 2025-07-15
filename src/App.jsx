import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './Pages/ErrorPage'
import ShopPage from './Pages/ShopPage'
import MainLayout from './Layouts/MainLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App