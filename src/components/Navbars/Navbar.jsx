import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import MobileNavbar from "./MobileNavbar";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
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
      linkname: "portfolio",
    },
    {
      id: 4,
      link: "/",
      linkname: "experience",
    },
    {
      id: 5,
      link: "/",
      linkname: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center  w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signatureFont ml-2">Jatin</h1>
      </div>

      <ul className="hidden md:flex ">
        {/* we makke a loop and we loop over the array of obj using dstructure ad normal way first one is normal way */}
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200 hover:text-white"
          >
            <Link to={link.linkname} smooth duration={500}>
              {" "}
              {link.linkname}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
      >
        {/* <FaBars  /> z-10 bcos we want this is first  */}
        {/* <FaTimes/> */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

       {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 ">
           {/* we makke a loop and we loop over the array of obj using dstructure ad normal way first one is normal way  */}
          {links.map(({ id, linkname }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={linkname}
                smooth
                duration={500}
              >
                {" "}
                {linkname}
              </Link>
            </li>
          ))}
        </ul>
      )} 




    </div>
  );
};

export default Navbar;
