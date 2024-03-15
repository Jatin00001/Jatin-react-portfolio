import React from "react";
import projectone from "../assets/portFolio/project1.png";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: projectone,
      links: "/",
    },
    {
      id: 2,
     src: projectone,
      links: "/",
    },
    {
      id: 3,
     src: projectone,
      links: "/",
    },
    {
      id: 4,
     src: projectone,
      links: "/",
    },
    {
      id: 5,
     src: projectone,
      links: "/",
    },
    {
      id: 6,
     src: projectone,
      links: "/",
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-gray-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg flex flex-col justify-center p-4 mx-auto w-full h-full ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </h1>
          <h1 className="py-6">Checkout Some of my work here....</h1>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-8 px-12 sm:p-0">
          {projects.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projectoneicn"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
