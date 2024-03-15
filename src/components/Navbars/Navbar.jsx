import React, { useState } from "react";
import {FaBars , FaTimes} from "react-icons/fa"
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [nav,setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "/",
      linkname: "home",
    },
    {
      id: 2,
      link: "/",
      linkname: "about",
    },
    {
      id: 3,
      link: "/",
      linkname: "Portfolio",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-full h-20 text-white fixed bg-black px-4">
      <div><h1 className="text-5xl font-signatureFont ml-2">Jatin</h1></div>

      <ul className="hidden md:flex ">
        {/* we makke a loop and we loop over the array of obj using dstructure ad normal way first one is normal way */}
        {links.map((link) => (
          <li key={link.id}  className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>{link.linkname}</li>
        ))}
      </ul>


      <div onClick={()=> setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
         {/* <FaBars  /> z-10 bcos we want this is first  */}
        {/* <FaTimes/> */}
        {nav ?<FaTimes size={30}/>:<FaBars size={30}/>}
      </div>

      {nav && (<MobileNavbar/>)}
     
    </div>
  );
};

export default Navbar;
