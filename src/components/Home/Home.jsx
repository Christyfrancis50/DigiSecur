import React from 'react'
import { Banner } from './Banner'
import { BannerCards } from './BannerCards'
import { AboutUs } from './AboutUs'
import { OurServices } from './OurServices'
import { ChooseUs } from './ChooseUs'

export const Home = () => {
  return (
    <div>
    <Banner/>
    <BannerCards/>
    <AboutUs/>
    <OurServices/>
    <ChooseUs/>
    </div>
  )
}
