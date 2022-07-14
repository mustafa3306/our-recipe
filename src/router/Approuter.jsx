import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '../components/globalstyles/Globalstyles';
import Navbar from '../components/nav/Navbar';
import About from '../pages/about/About';
import Detail from '../pages/details/Detail';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Privaterouter from './Privaterouter';

const Approuter = () => {
  return (
    <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="about" element={<Privaterouter />} >
                <Route path='' element={<About />}/>
            </Route>
            <Route path='login' element={<Login />}/>
            <Route path='detail' element={<Privaterouter />}>
                <Route path='' element={<Detail />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Approuter