import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home';
import About from './pages/about/About';
import Demo from './pages/demo/demo.jsx'
import Services from './pages/services/Services'
import Contact from './pages/contact/Contact'
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer"

const App = () => {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
<Route  path="/" element={<Home/>} />
<Route  path="/about" element={<About/>}/>
<Route  path="/services" element={<Services/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/Demo" element={<Demo/>} />
</Routes>

<Footer/>

</BrowserRouter>

    </>
  );
};

export default App;
