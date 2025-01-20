import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import Foote from '../Components/Foote'

const Courseselect = () => {
    return (
        <div className='container mx-auto'>
            <Navbar />
            <div className="px-6 py-8 flex justify-evenly text-white bg-[#1E1E1E]">
              <div className='w-1/2'>  <h1 className="text-3xl font-semibold ">
                    Machine Learning: Natural Language Processing in Python (V2)
                </h1>
                <p className="mt-6">
                    NLP: Use Markov Models, NLTK, Artificial Intelligence, Deep Learning, Machine Learning, and Data Science in Python
                </p>
                <div className="flex justify-between items-center mt-10">
                    <div className="text-blue-700">
                        ⭐⭐⭐⭐⭐ <span className="ml-2">(5,988 ratings) | 22,266 students</span>
                    </div>
                </div>
                <div className="flex space-x-4 mt-5">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-md">
                        Add to Cart
                    </button>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-md">
                        Buy Now
                    </button>
                </div></div>
              <div className='w-1/2'>
              <div className='flex flex-col items-end '>
                 <div className='bg-white rounded-t-lg rounded-b-lg'>
                 <div className="w-64 h-48 bg-gray-400 rounded-t-lg flex justify-center items-center">
                            <h1 className="font-bold text-3xl text-black">404</h1>
                        </div>
                        <p className="text-2xl font-bold text-black text-center my-5">₹3,699</p>
                 </div>
                       
                    </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-gray-100 px-6 py-8">
                <h2 className="text-xl font-semibold text-gray-800">
                    Explore Related Topics
                </h2>
                <div className="flex space-x-4 mt-4">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Web Development
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Data Science
                    </div>
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-md">
                        Communication
                    </div>
                </div>
            <div className="flex flex-nowrap justify-between pt-16">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
            <Foote />
        </div>
    )
}

export default Courseselect