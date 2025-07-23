import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './Pages/ErrorPage';
import ShopPage from './Pages/ShopPage';
import AboutPage from './Pages/AboutPage';
import NewsPage from './Pages/NewsPage';
import BlogPage from './Pages/BlockPage';
import ContactPage from './Pages/ContactPage';
import ViewProductPage from './Pages/ViewProductPage';
import CartPage from './Pages/CartPage';
import WatchPage from './Pages/WatchPage';
import BraceletPage from './Pages/BraceletPage';
import SunglassesPage from './Pages/SunglassesPage';
import CheckoutPage from './Pages/CheckoutPage';
import MainLayout from './Layouts/MainLayout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>

      <ToastContainer autoClose={3000} position="top-right" hideProgressBar={false} />
      
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/news' element={<NewsPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/watch' element={<WatchPage />} />
          <Route path='/sunglasses' element={<SunglassesPage />} />
          <Route path='/bracelet' element={<BraceletPage />} />
          <Route path='/check-out' element={<CheckoutPage />} />
          <Route path='/product/:ID' element={<ViewProductPage />} />
          <Route path='/blog/:ID' element={<BlogPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
