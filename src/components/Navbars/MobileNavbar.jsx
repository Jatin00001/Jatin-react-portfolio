import React from "react";

const MobileNavbar = () => {
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
      linkname: "services",
    },
  ];

  return (

      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" >
        {/* we makke a loop and we loop over the array of obj using dstructure ad normal way first one is normal way */}
        {links.map(({ id, linkname }) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            {linkname}
          </li>
        ))}
      </ul>

  );
};

export default MobileNavbar;
