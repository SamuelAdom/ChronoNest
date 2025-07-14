import React from 'react'
import HeroSection from '../Components/HeroSection'
import Slider from '../Components/Slider'
import NewArrivalsBanner from '../Components/ArrivalBanner'
import EyeBanner from '../Components/EyeBanner'
import Stylish from '../Components/Stylish'
import TopSellers from '../Components/TopSellers'
import Materials from '../Components/Materials'
import NewProduct from '../Components/NewProduct'
import NewsLetter from '../Components/NewsLetter'
import Compare from '../Components/Compare'
import Blog from '../Components/Blog'

const HomePage = () => {
  return (
    <div>
   <HeroSection/>
   <Slider/>
   <NewArrivalsBanner/>
   <EyeBanner/>
   <Stylish/>
   <NewArrivalsBanner/>
   <TopSellers/>
   <Materials/>
   <NewProduct/>
   <NewsLetter/>
   <NewArrivalsBanner/>
   <Compare/>
   <Blog/>
  
    </div>
  )
}

export default HomePage