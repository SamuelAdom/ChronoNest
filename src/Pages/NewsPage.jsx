import React from 'react'
import Blog from '../Components/Blog'

const NewsPage = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center mt-7 space-y-3'>
        <h1 className='text-5xl font-serif '>News</h1>
        <p className='text-lg font-mono text-yellow-600'>ACCESSORIES | BLOG | BRACELETS | SUNGLASSES | WATCHES </p>
    </div>
    <div>
        <Blog/>
    </div>

    </>
  )
}

export default NewsPage