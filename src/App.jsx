import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
// import Register from './Components/Register/Register';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';




const App = () => {

 
 
  const [playState,setPlayState] = useState(false);
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <div className='container1'>
        <Title subtitle='Our Program' title='What we Offer' />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title=' Campus Photos' />
        <Campus />
        <Title subtitle='TESTIMONIALS' title=' What Student Says' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get In Touch' />
        <ContactUs />
        {/* <Register/> */}
        <Footer/>


        
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
    
  </>
  );
};

export default App;


