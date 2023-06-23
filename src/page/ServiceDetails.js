import React from 'react'
import CommonBanner from '../component/Common/Banner'
import ServiceDetailsMain from '../component/ServiceDetails'
// import OurPartner from '../component/Common/OurPartner'

const ServiceDetails = () => {
    return (
        <>
            <CommonBanner heading="Detalles de Servicios" page="Detalles de Servicios"/>
            <ServiceDetailsMain/>
            {/* <OurPartner/> */}
        </>
    )
}

export default ServiceDetails
