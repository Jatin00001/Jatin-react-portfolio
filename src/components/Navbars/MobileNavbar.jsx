import React, { useState } from "react";
import {Link} from 'react-scroll'

const MobileNavbar = () => {
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

      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" >
        {/* we makke a loop and we loop over the array of obj using dstructure ad normal way first one is normal way */}
        {links.map(({ id, linkname   }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={ () => setNav(!nav) } to={linkname} smooth duration={500}> {linkname}</Link>
          </li>
        ))}
      </ul>

  );
};

export default MobileNavbar;
