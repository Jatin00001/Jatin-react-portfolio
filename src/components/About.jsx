import React from 'react'

const About = () => {
  return (
    // <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white box-border'>
    <div name='about' className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white box-border'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <h1 className='text-4xl font-bold inline border-b-4 border-gray-500'>About</h1>
        </div>
        <p className='text-lg md:text-xl '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas minus esse harum ratione voluptatem sequi sit dolorem tempora provident quam cupiditate placeat hic odio fuga accusantium, fugit reiciendis necessitatibus.</p>


         {/* Replace <br /> tag with Tailwind CSS margin utility classes */}
         <div className="mt-8"></div>


        <p className='text-lg md:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse incidunt molestias ad libero placeat praesentium asperiores, earum sint qui culpa ratione ea repudiandae laboriosam quas maxime, necessitatibus distinctio delectus. Minus.
            Nisi vero, quam in laudantium autem eligendi perspiciatis possimus commodi quos, nulla rerum optio nihil alias necessitatibus odit, voluptates minima quaerat officiis facilis doloremque quisquam error iusto. Dolorum, tempore deleniti.
            Eligendi sint ex sed qui numquam voluptatum voluptatem animi eaque praesentium maiores suscipit beatae voluptates nobis, nostrum soluta similique assumenda commodi quisquam atque laborum neque molestias. Consequuntur saepe quia esse!
            Dolore libero fugiat, commodi magnam repellendus 
        </p>
      </div>


    </div>
  )
}

export default About
