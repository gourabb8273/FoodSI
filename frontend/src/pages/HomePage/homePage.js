import React from 'react';
import { Input } from 'antd';

import Navbar from "../../components/NavBar/navbar";
import "./homePage.css";
import { Link } from 'react-router-dom';

/**
 * Home page component
 */
function HomePage(props) {
  return(
    <div>
    <Navbar signup="Sign Up" shouldNavBarTitleRender />
    <div className='homepage-content'>
    <div className='homepage-leftContent'>
        <div className='homepage-title'>
        <h1>Welcome to FoodSI</h1>
        <h3>  Get the food you want</h3>
        </div>
    <Input className='searchzipcode' placeholder="Search with zip code..." />
    <Input className='searchfood' placeholder="Search any food..." />    
    <h5>Already have an account? <Link to="/login">Login</Link></h5>
    </div>
    <img className='homepage-image' src="food.jpg" alt="Desi foods"/>
    </div>         
    </div>
   )
 }

 export default HomePage;