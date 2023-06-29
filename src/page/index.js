import React from 'react'
import HomeBanner from '../component/Home_One/Banner'
import HomeAbout from '../component/Home_One/About'
import OurAdvantage from '../component/Home_One/Our_Advantages'
import MapArea from '../component/Home_One/Map'

const index = () => {
    return (
        <>
            <HomeBanner/>
            {/* <GetSchedule/> */}
            {/* <LogisticsService/> */}
            <HomeAbout/>
            <OurAdvantage/>
            <MapArea/>
            {/* <Testimonials/> */}
            {/* <PricingTable/> */}
            {/* <Subscribe/>
            <BlogHome/> */}
        </>
    )
}

export default index
