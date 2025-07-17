import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/asset'

const ViewProductPage = () => {
    const{ID}=useParams()
    const[itemInfo, setItemInfo]=useState({})
    useEffect(()=>{
        const getItem=()=>{
              setItemInfo(products.find(item=>item.id===Number(ID)))
              console.log(setItemInfo)
        }
        if(ID){
            getItem()
        }
    },[ID])

  return itemInfo && (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2'>
<img className='w-110' src={itemInfo.image} alt={itemInfo.name} />
<div>
    {itemInfo.description}
</div>
    </div>
    </>
  )
}

export default ViewProductPage