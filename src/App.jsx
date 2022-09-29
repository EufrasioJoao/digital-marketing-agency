import React, {useEffect} from 'react'
import Navbar from './components/Navbar/Index';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home/Index';
import ContactPage from './pages/Contact/Index';
import AboutPage from './pages/About/Index';
import ServicesPage from './pages/Services/Index';
import Footer from './components/Footer/Index';
import Aos from 'aos' 
import 'aos/dist/aos.css'
import './App.css'


function App() {

  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
