import React from "react";
import html from "../assets/skills/w_html_logo_icon_170241.png";
import css from "..//assets/skills/css3-01_icon-icons.com_50918.png";
import javascript from "..//assets/skills/javascript.png";
import react from "..//assets/skills/reactjs.jpeg";
import tailwind from "..//assets/skills/reactjs.jpeg";
import python from "..//assets/skills/python_18894.png";
import flask from "..//assets/skills/jinjaFunction+python.png";
const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 6,
      src: flask,
      title: "Flask",
      style: "shadow-grey-300",
    },
  ];
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </h1>
          <h1 className="py-6 italic">Skills i have...</h1>
        </div>

        <div  className="w-full  grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105  duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={src+" alt"} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
