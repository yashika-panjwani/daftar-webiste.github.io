import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Collection from './pages/collection';
import About from './pages/about';
import Contact from './pages/contact'; 
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login'; 
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/orders'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext';


const App = () => {
  return (
    <ShopContextProvider>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} /> 
          <Route path='/PlaceOrder' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} /> 
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  );
};

export default App;
