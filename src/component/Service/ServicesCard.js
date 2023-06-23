import React from 'react'
// Import SectionHeading
import SectionHeading from '../Common/SectionHeading'
// Import ServiceCard
import ServiceCard from '../Common/Service/ServiceCard'
// Import ServiceData
import {ServiceData} from '../Common/Service/ServiceData'

const ServicesCard = () => {
    return (
        <>
            <section id="services_page">
                <div className="container">
                    <SectionHeading heading="Nuestros Servicios" para="Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet"/>
                    <div className="service_wrapper_top">
                        <div className="row">

                            {ServiceData.map((data, index) => (
                                <div className="col-lg-4" key={index}>
                                    <ServiceCard img={data.img} heading={data.heading} para={data.para}
                                                 button={data.button}/>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ServicesCard
