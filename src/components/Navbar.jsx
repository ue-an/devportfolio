import React, {useState} from "react";
import Logo from "../assets/portfolio-logo.png";
import {AiOutlineClose, AiOutlineMenu,} from "react-icons/ai";
const Navbar = () => {
 const [nav, setNav] = useState(false);
 const [hov, setHov] = useState(false);

 const handleNav = () => {
  setNav(!nav);
 };

 const handleHov = () => {
  setHov(!hov);
 }

 return (
  <div className="bg-primary sticky top-0 flex justify-between items-center px-4 h-24 mx-auto max-w-[1080px] text-white">
   <div className="w-[90%] flex justify-between items-center">
    <div className="w-[12%]"></div>
    <div>
      <div className="relative z-0">
        {hov ? <h1 class="rotate-12 translate-y-6 duration-500 text-gray-600 font-semibold">IAN AGUINALDO</h1> : <h1 className="font-semibold">DEV PORTFOLIO</h1>}
        <div onMouseEnter={handleHov} onMouseLeave={handleHov} className="absolute inset-0 z-10 font-semibold">
          <h1 className="fixed">DEV PORTFOLIO</h1>
        </div>
      </div>
    </div>
    <div></div>
   </div>
   <div onClick={handleNav}>
    {nav ? <AiOutlineClose className="hover:scale-150 duration-500 hover:text-accent" size={20}/> : <div className="flex gap-0 transition-all duration-500 rotate-90 hover:gap-1 hover:text-accent">
     <p>•</p>
     <p>•</p>
     <p>•</p>
     </div>}
   </div>
   <div className={nav ? 'fixed left-0 top-0 w-[70%] border-r-gray900 bg-[#030712] h-full ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-700'}>
    <div className="flex items-center justify-end">
      <div className="" onClick={handleNav}>
      <img class="md:w-[150px] m-4 w-[120px] hover:scale-105 duration-500" src={Logo} alt=""/>
      </div>
    </div>
    <ul className="md:text-2xl text-right uppercase p-4">
     <li className="hover:scale-90 hover:text-accent duration-500 p-4 border-b border-accent">Home</li>
     <li className="hover:scale-90 hover:text-accent duration-500 p-4 border-b border-accent">About</li>
     <li className="hover:scale-90 hover:text-accent duration-500 p-4">Contacts</li>
    </ul>
   </div>
  </div>
 );
}

export default Navbar;