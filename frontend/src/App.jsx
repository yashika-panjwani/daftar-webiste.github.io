// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Home from './pages/home'
// import Collection from './pages/collection'
// import about from './pages/about'
// import contact from './pages/contact'
// import Product from './pages/product' 
// import Cart from './pages/cart' 
// import login from './pages/login' 
// import PlaceOrder from './pages/PlaceOrder' 
// import orders from './pages/orders' 
// import Navbar from './components/Navbar'
// import Footer from './components/footer'
// import SearchBar from './components/SearchBar'
// import { ToastContainer, toast } from 'react-toastify';

// const App = () => {
//   return (
//     <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
//       <ToastContainer/>
//       <Navbar/> 
//       <SearchBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/collection' element={<Collection/>}/>
//         <Route path='/about' element={<about/>}/>
//         <Route path='/contact' element= {<contact/>}/>
//         <Route path='/Product/:productId' element={<Product/>}/>
//         <Route path='/cart' element={<Cart/>}/>
//         <Route path='/login' element={<login/>}/>
//         <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
//         <Route path='/orders' element={<orders/>}/>
//       </Routes>
//       <Footer/>
//     </div>
//   )
// }

// export default App








import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Collection from './pages/collection';
import About from './pages/about'; // Fix: Use PascalCase for component names
import Contact from './pages/contact'; // Fix: Use PascalCase for component names
import Product from './pages/product';
import Cart from './pages/cart';
import Login from './pages/login'; // Fix: Use PascalCase for component names
// import PlaceOrder from './pages/PlaceOrder'; // Fix: Use PascalCase for component names
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/orders'; // Fix: Use PascalCase for component names
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext'; // Import the provider


const App = () => {
  return (
    <ShopContextProvider> {/* Wrap the entire app with ShopContextProvider */}
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} /> {/* Fix: Use PascalCase */}
          <Route path='/contact' element={<Contact />} /> {/* Fix: Use PascalCase */}
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} /> {/* Fix: Use PascalCase */}
          <Route path='/PlaceOrder' element={<PlaceOrder />} /> {/* Fix: Use PascalCase */}
          <Route path='/orders' element={<Orders />} /> {/* Fix: Use PascalCase */}
        </Routes>
        <Footer />
      </div>
    </ShopContextProvider>
  );
};

export default App;
