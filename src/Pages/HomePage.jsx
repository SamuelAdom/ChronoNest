import React from 'react'
import HeroSection from '../Components/HeroSection'
import Slider from '../Components/Slider'
import NewArrivalsBanner from '../Components/ArrivalBanner'
import EyeBanner from '../Components/EyeBanner'
import Stylish from '../Components/Stylish'
import TopSellers from '../Components/TopSellers'
import Materials from '../Components/Materials'
import NewProduct from '../Components/NewProduct'


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
  
    </div>
  )
}

export default HomePage