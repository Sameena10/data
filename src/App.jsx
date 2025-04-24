import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState,useEffect} from 'react';
import HomePage from './Pages/HomePage';
import Navbar from './Compnents/Navbar';
import Footer from './Compnents/Footer';
import Usecase from './Compnents/Usecase';
import "./App.css"
import Product from './Pages/Product';
import Technology from './Pages/Technology';
import ScrollTop from './Compnents/ScrollTop';


function App() {
  const location = useLocation();
  const[loading, setLoading]=useState();
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location]);
  return (
    <div className='app-wrapper'>
    <ScrollTop/>
    <Navbar/>
    <div className="main-content">
    <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/usecase' element={<Usecase/>}/>
            <Route path='/product-overview' element={<Product/>}/>
            <Route path='/technology' element={<Technology/>}/>

    </Routes>
    </div>
    <Footer/>
    </div>
   
  );
}

export default App;
