import React from 'react'
import Video_Bk from '../assets/Video_Bk.mp4'

const Materials = () => {
  return (
    <div className="relative w-full h-100 sm:h-80 overflow-hidden">
  
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video_Bk} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

     
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-10">
      
        <div className="bg-white/90 text-black p-8  max-w-md shadow-lg">
          <h1 className="text-3xl font-bold mb-4 font-serif">Materials That Matter</h1>
          <p className="text-base mb-6 leading-relaxed">
            We craft each timepiece with precision, using materials designed to last a lifetime. From stainless steel to fine leather, every detail counts.
          </p>
          <button className="bg-transparent text-black border-2 border-black px-10 py-3  hover:border-3 cursor-pointer">
            About Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default Materials
