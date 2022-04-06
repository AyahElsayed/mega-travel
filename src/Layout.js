import React from 'react'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Slider from './components/slider/Slider';

const Layout = () => {
  return (
    <div>
      <Header/>
      <Slider />
      <Home />
      <Footer/>
    </div>
  )
}

export default Layout