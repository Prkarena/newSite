import React from 'react';


import {FaFacebookSquare , FaInstagram , FaLinkedin , FaYoutube , FaMobileAlt  , FaEnvelope } from 'react-icons/fa';
import './HeaderTop.css';

const HeaderTop = ({data}) => { 
    console.log(data)
    return(
        <div className='header-top' >
       
                <div className='header-item' id='socialIcons'>
                <a href={data.title} ><FaFacebookSquare /></a> 
                <a href={data.section2} > <FaInstagram/></a> 
                <a href={data.subtitle} ><FaLinkedin/></a> 
                <a href={data.section1} ><FaYoutube/></a> 
                </div>
               
                    <div className='header-item' id="mobile">
                      <FaMobileAlt/>
                      <label>{data.phone}</label> 
                    </div>

                    <div className='header-item' id="email">
                         <FaEnvelope/> 
                         <label>{data.email}  </label>              
                    </div>
                
        </div>
    );
}

export default HeaderTop;


