import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/edusity_assets/logo.png'
import menu_icon from '../../assets/edusity_assets/menu-icon.png'
import { Link } from 'react-scroll'
// import Register from '../Register/Register';
import { useNavigate } from 'react-router-dom'


const Navbar = () => {

  const [sticky,setSticky]=useState(false);  

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50  ? setSticky(true):setSticky(false);
    })
  },[]);

  const[mobileMenu , setMobileMenu] = useState(false);

  const toggleMenu = () => 
  {
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true);
  }
  const navigate=useNavigate();
  // const handleRegisterClick = () => {
  //   // Function to handle register link click
  //   navigate("/register"); // Navigate to the '/register' route
  // };
  return (
    <nav className={`container1 ${sticky? 'dark-nav':' '}`}>
        <img src={logo} className='logo'/>
        <ul className={mobileMenu ? '':'hide-mobile-menu'}>
          <li><Link to='hero' smooth={true} offset={0} duration ={500} className='link1'>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration ={500} className='link1'>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration ={500} className='link1'>About Us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration ={500} className='link1'>UCampus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration ={500} className='link1'>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-260} duration ={500} className ='btn3'>Contact Us</Link></li>
          {/* <li><Link to='register' smooth={true} offset={-260} duration ={500} className='link1'>Register</Link></li> */}
          
          {/* <button className='btn3' onClick={register}>Register</button> */}
          {/* <li><button className='btn3' onClick={handleRegisterClick}>Register</button></li> */}
          {/* <li><Link to='/register' smooth={true} offset={-260} duration ={500} className ='btn3' onClick={register}>Login</Link></li> */}

        </ul>  
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar