import React from 'react'
import NewsLetter_Background from '../assets/NewsLetter_Background.jpg'

const NewsLetter = () => {
  return (
    <div className='relative bg-center bg-cover' style={{backgroundImage:`url(${NewsLetter_Background})`}}>
      
        <section className="py-14 max-w-screen-xl mx-auto">
            <div className="relative overflow-hidden mx-4 px-4 py-14 bg-transparent md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold">
                            Subscribe to our newsletter
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none"
                            />
                            <button
                                className="p-2 px-3 rounded-lg font-medium text-black bg-transparent border-1 border-black lg:hover:border-3 outline-none shadow-md focus:shadow-none sm:px-4 cursor-pointer"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
                            No spam ever, we care about the protection of your data.
                            Read our <a className="underline" href="javascript:void(0)"> Privacy Policy </a>
                        </p>
                    </div>
                </div>
              
            </div>
        </section>
    </div>
  )
}

export default NewsLetter
