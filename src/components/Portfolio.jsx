import React from "react";
import projectone from "../assets/portFolio/project1.png";
import flask from "../assets/portFolio/flask-image.png";
import webdesign from "../assets/portFolio/web-design.png";
import javaimg from "../assets/portFolio/Java-Mysql1.jpg";
import DSAIMG from "../assets/portFolio/dsaimage.jpg";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: projectone,
      links: "/",
      Demo : ""
    },
    {
      id: 2,
     src: flask,
      links: "https://github.com/Jatin00001/flask-app-jatin",
      Demo : "Demo"
    },
    {
      id: 3,
     src: webdesign,
      links: "/",
      Demo : "Demo"
    },
    {
      id: 4,
     src: javaimg,
      links: "https://github.com/Jatin00001/ATM-Simulator-/tree/main",
      Demo : "Demo"
    },
    {
      id: 5,
     src: DSAIMG,
      links: "https://github.com/Jatin00001/c-_test",
      Demo : "Demo"
    },
    // {
    //   id: 6,
    //  src: projectone,
    //   links: "/",
    // },
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
          {projects.map(({ id, src , links ,Demo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projectoneicn"
                className="rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <a href={links} target="_blank" rel="noreferrer" ><button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  {Demo}
                </button></a>
                <a href={links} target="_blank" rel="noreferrer"  ><button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
