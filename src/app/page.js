import React from 'react'

import Map from '../components/Map'
import Experts from '../components/Experts'
import BestChoice from '../components/BestChoice'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'

const Home = () => {
  return (
       <div>
           
           <Map/>
           <BestChoice/>
          <Experts/>
          <Reviews/>
          <Footer/>
         
       </div>
  )
}

export default Home