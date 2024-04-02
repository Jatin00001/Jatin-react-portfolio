import React from "react";

const About = () => {
  return (
    // <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white box-border'>
    <div
      name="about"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white box-border"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <p className="text-lg md:text-xl ">
          Hey, I'm Jatin! I graduated from GGSIPU in 2022 with a degree in
          Electronics and Communication Engineering, but my true passion lies in
          creating websites and software.
        </p>

        {/* Replace <br /> tag with Tailwind CSS margin utility classes */}
        <div className="mt-8"></div>

        <p className="text-lg md:text-xl">
        Ever since I discovered coding, I've been hooked. It's like solving puzzles and bringing ideas to life all at once. As a software developer, I thrive on challenges and love turning concepts into functional products.
        </p>

        <div className="mt-8"></div>
        <p className="text-lg md:text-xl ">
        What drives me is the potential of technology to make a positive impact. Whether it's simplifying tasks or fostering innovation, I believe software can change the world for the better.
        </p>

        <div className="mt-8"></div>
        <p className="text-lg md:text-xl ">
        I'm not just about writing code; I'm about creating meaningful experiences. From designing user-friendly interfaces to tackling complex backend problems, I'm always eager to push boundaries and learn something new.
        </p>

        <div className="mt-8"></div>
        <p className="text-lg md:text-xl ">
        So, here I am, fueled by passion and ready to make a difference. Let's embark on this exciting journey together and build something incredible!
        </p>
      </div>
    </div>
  );
};

export default About;
