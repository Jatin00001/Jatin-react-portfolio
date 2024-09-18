import React from 'react'
import heroimage from '../assets/heroimage.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='overflow-hidden h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='mt-20 max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4  box-border md:flex-row' >
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Software Developer.</h2>
            <p className='text-gray-400 py-4 max-w-md'>Hey, I'm Jatin! I graduated from GGSIPU in 2022 my true passion lies in creating websites and software. <br /> So, here I am, fueled by passion and ready to make a difference. Let's embark on this exciting journey together and build something incredible! </p>
            <div >
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 justify-center items-center   flex rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  ' >
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                </span>
                </Link>
                
            </div>
        </div>
        <div className='mb-20'>
            <img src={heroimage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home
