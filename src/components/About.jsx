import React from "react";
import Profile from '../assets/profile-live-act.png';
import ProfileVect from '../assets/profile-vector.png';
import {AiFillGithub, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";

const About = () => {

 return (
  <div className="py-16 px-4 bg-gray-700 w-full">
   <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
    <div className="pr-10">
     <img className="rounded-full hover:scale-105 duration-500 md:w-[300px] w-[250px] mx-auto my-4" src={ProfileVect} alt="" />
    </div>
    <div className="flex flex-col justify-center md:items-start items-center">
     <p className="text-accent font-bold">Hello, I am</p>
     <h1 className="md:text-4xl sm:text-3xl text-2xl text-[#030712] drop-shadow-3xl font-bold py-2">Ian Benedict Aguinaldo</h1>
     <p className=" text-gray-400 text-justify">I am developing mobile applications, web applications and some desktop applications. Most of my projects are full-stack but I also do frontends only. My mostly used languages are C#, Javascript for frontend and PHP for backend. </p>
     <div>
     <AiFillGithub className="hover:scale-150 duration-500 hover:text-accent" size={20}/>
     </div>
    </div>
   </div>
  </div>
 );
}

export default About