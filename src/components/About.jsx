import React from "react";
import Profile from '../assets/profile-live-act.png';
import ProfileVect from '../assets/profile-vector.png';
import {DiLaravel, DiJavascript } from 'react-icons/di';
import {SiCsharp, SiJavascript, SiLaravel, SiPhp, SiFlutter, SiReact} from 'react-icons/si';
import CSharp from '../assets/csharp_icon.png';
import {TbBrandCSharp} from 'react-icons/tb';

const About = () => {

 return (
  <div className="py-8 px-4 w-full">
   <div className="max-w-[1080px] mx-auto grid md:grid-cols-2">
    <div className="pr-10">
     <img className="rounded-full hover:scale-105 duration-500 md:w-[300px] w-[250px] mx-auto my-4" src={ProfileVect} alt="" />
    </div>
    <div className="flex flex-col justify-center md:items-start items-center">
     <p className="text-accent font-bold">Hello, I am</p>
     <h1 className="md:text-4xl sm:text-3xl text-2xl text-white font-bold py-2">Ian Benedict Aguinaldo</h1>
     <p className=" text-gray-400 text-justify">A mobile applications and web applications developer. Most of my projects are full-stack but I also do frontends only. My mostly used languages are C#, Javascript for frontend, PHP for backend, and MySQL for database.</p>
     <p className=" mt-3 text-gray-400 text-justify">Currently learning other frameworks and tech stacks; and open for opportunities to be trained to enhance my skills further.</p>
     <div className="mb-9 w-full mt-3 flex gap-3 justify-around duration-500">
      {/* <SiCsharp className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45}/> */}
      {/* <img className="w-[45px] hover:scale-150 duration-500 hover:text-accent text-gray-300" src={CSharp} alt="" /> */}
      <TbBrandCSharp className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45} />
      <SiJavascript className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45} />
      <SiPhp className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45} />
     </div>
     <div className="w-full mt-3 flex gap-3 justify-around duration-500">
      <SiFlutter className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45}/>
      <SiReact className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45} />
      <SiLaravel className="hover:scale-150 duration-500 hover:text-accent text-gray-300" size={45} />
     </div>
    </div>
   </div>
   <div id="contacts"></div>
  </div>
 );
}

export default About