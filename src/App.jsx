import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ErrorPage from './Pages/ErrorPage'
import ShopPage from './Pages/ShopPage'
import AboutPage from './Pages/AboutPage'
import NewsPage from './Pages/NewsPage'
import BlogPage from './Pages/BlockPage'
import ContactPage from './Pages/ContactPage'
import ViewProductPage from './Pages/ViewProductPage'
import CartPage from './Pages/CartPage'
import WatchPage from './Pages/WatchPage'
import CheckoutPage from './Pages/CheckoutPage'
import MainLayout from './Layouts/MainLayout'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/shop' element={<ShopPage/>}></Route>
        <Route path='/about-us' element={<AboutPage/>}></Route>
        <Route path='/news' element={<NewsPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/watch' element={<WatchPage/>}></Route>
        <Route path='/check-out' element={<CheckoutPage/>}></Route>
        <Route path='/product/:ID' element={<ViewProductPage/>}></Route>
        <Route path='/blog/:ID' element={<BlogPage/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App