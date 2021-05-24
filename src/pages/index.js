import React from "react"
import Feature from "../components/Feature"
import Hero from "../components/Hero"
import InfoSection from "../components/InfoSection"
import Listings from "../components/Listings"
import { InfoData, InfoDataTwo } from "../data/InfoData"
import { SliderData } from "../data/SliderData"

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Listings />
      <Feature />
      <InfoSection {...InfoDataTwo} />
    </>
  )
}

export default Home
