import React, { useEffect, useState } from 'react'
import { blog } from '../assets/asset'
import { useParams } from 'react-router-dom'

const BlockPage = () => {
    const{ID}=useParams()
    const[content, setContent]=useState({})

    useEffect(()=>{
        const getBlog=()=>{
            setContent(blog.find((post)=>post.id===Number(ID)))
        }
        if(ID){
        getBlog()
        }
    },[ID])
  return (
    content &&
    <>
    <div className='bg-cover bg-center relative h-100 lg:h-screen md:h-140' style={{backgroundImage:`url(${content.image})`}}>
        <div className='flex justify-center'>
            <h1 className='text-3xl mt-50 text-center sm:text-6xl font-serif text-white md:mt-55'>{content.description}</h1>
        </div>
    
    </div>
        <div className='flex justify-center mt-15'>lorem</div>
    </>
  )
}

export default BlockPage