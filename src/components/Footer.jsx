import React from "react";
import PortfolioIcon from '../assets/port-icon3.png';

const Footer = () => {
 return (
  <div>   
   <footer class="bg-gray-800 shadow w-full">
       <div class=" flex flex-col justify-center items-center w-full mx-auto max-w-[1080px] p-4 md:flex md:items-start md:justify-start">
       {/* <a href="https://iamaieien.com/" class="hover:underline">Flowbite™</a> */}
         <div className="flex items-center">
          <p class="text-sm text-gray-500 sm:text-center mr-2">© 2023 </p>
          <img className="w-[20px] mr-1" src={PortfolioIcon} alt="" />
          <p className="text-sm text-gray-500 sm:text-center">Dev Portfolio</p>
         </div>
       <p className="text-sm text-gray-500 sm:text-center">All Rights Reserved</p>
       </div>
   </footer>
  </div>
 );
}

export default Footer;