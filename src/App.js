import './App.css';
import React, { useEffect, useState } from 'react';
import Pre from './Component/Pre';
import Navbar from './Component/Navbar';
import Home from './Component/Home/Home';
import Projects from './Component/Project/Project';
import Footer from './Component/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './Style.css';
import About from './Component/About/about';
import ScrollToTop from './Component/Scroll';
import Contact from './Component/Connect/Contact'





function App() {
  const [load,updateLoad] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      updateLoad(false);
    },1200)
  },[])
  return (
    <BrowserRouter>
      <Pre load={load}/>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
     
      </div>
    </BrowserRouter>
  
  );
}

export default App;

