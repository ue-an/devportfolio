import React from "react";
import Logo from "../assets/portfolio-logo.png";
import Typed from 'react-typed';

const Hero = () => {
 return (
  <div className="text-white">
   <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center md:w-[95vh]">
   <img class="md:max-w-[300px] hover:scale-105 duration-700 max-w-[200px] mx-auto" src={Logo} alt=""/>
   <h1 className="md:text-3xl text-xl font-bold md:py-3">Software Developer</h1>
   <div className="relative z-[-1] flex mx-auto">
    <p className=" md:text-2xl text-accent font-bold px-2">Full Stack</p>
    <span className="text-white">•</span>
    <p className="md:text-2xl text-accent font-bold px-2">Designer</p>   
   </div>
   <div className="flex justify-center items-center">
    <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
     Building Modern
     </p>
    <Typed 
    className="md:pl-4 sm:pl-2 pl-1 md:text-5xl sm:text-4xl text-xl font-bold"
    strings = {['Web App', 'Mobile App', 'Desktop App']}
    typeSpeed={120}
    backSpeed={140}
    loop />
   </div>
   <p className="md:text-2xl px-2 text-xl font-bold text-gray-500">Developing your cool ideas. Products with modern and minimalist designs</p>
   </div>
  </div>
 );
}

export default Hero;