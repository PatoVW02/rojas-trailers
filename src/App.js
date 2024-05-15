import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './layout';

import HomeOne from './page/index'
import About from './page/About'
import Service from './page/Service'
import ServiceDetails from './page/ServiceDetails'
import BlogGrid from './page/BlogGrid'
import BlogWithSidebar from './page/BlogWithSidebar'
import BlogDetails from './page/BlogDetails'
import OurTeamArea from './page/OurTeam'
import Testimonials from './page/Testimonial'
import Gallery from './page/Gallery'
import Faqs from './page/Faqs'
import TrackYourShip from './page/TrackYourShip'
import SignUp from './page/SignUp'
import SignIn from './page/SignIn'
import PrivacyPolicy from './page/PrivacyPolicy'
import TermsCondition from './page/TermsCondition'
import Error from './page/Error'
import Contact from './page/Contact'
import PricingContent from './page/Pricing'
import RequestQuote from './page/RequestQuote'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<HomeOne />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/service' element={<Service />}/>
                    <Route path='/service_details' element={<ServiceDetails />}/>
                    <Route path='/blog_grid' element={<BlogGrid />}/>
                    <Route path='/blog_with_sidebar' element={<BlogWithSidebar />}/>
                    <Route path='/blog_details' element={<BlogDetails />}/>
                    <Route path='/our_team' element={<OurTeamArea />}/>
                    <Route path='/testimonials' element={<Testimonials />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/faqs' element={<Faqs />}/>
                    <Route path='/track_ship' element={<TrackYourShip />}/>
                    <Route path='/pricing' element={<PricingContent />}/>
                    <Route path='/request_quote' element={<RequestQuote />}/>
                    <Route path='/signup' element={<SignUp />}/>
                    <Route path='/signIn' element={<SignIn />}/>
                    <Route path='/privacyPolicy' element={<PrivacyPolicy />}/>
                    <Route path='/terms' element={<TermsCondition />}/>
                    <Route path='/contact' element={<Contact />}/>
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
