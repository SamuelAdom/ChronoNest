import React from 'react'
import { blog } from '../assets/asset'

const Blog = () => {
  return (
     <div className="bg-gray-100 border">
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl mx-auto text-center">
                    <h3 className="text-2xl font-mono">
                      Latest News
                    </h3>
                    <p className="text-4xl sm:text-6xl text-black mt-3 font-serif">
                       From The Blog
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 ">
                        {
                            blog.map((item) => (
                                <li key={item.id}className='border-1 p-4'>
                                    <div className="w-full h-60 sm:h-52 md:h-56">
                                        <img
                                            src={item.image}
                                            className="w-full h-full object-cover object-center shadow-md"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                          <p className="text-yellow-600">{item.category}</p>
                                        <h1 className="text-3xl font-serif">{item.description}</h1>
                                        <div className='mt-2'>
                                            <button className="bg-transparent text-black border-2 border-black px-5 py-2 hover:border-3 cursor-pointer" >READ MORE</button>
                                        </div>
                                      
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
        </div>
  )
}

export default Blog