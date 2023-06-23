import React from 'react'
// Import img
import img1 from '../../assets/img/service/service_details1.png'
import img2 from '../../assets/img/service/service_details2.png'

const ServiceContent = () => {
    return (
        <>
            <div className="col-lg-8">
                <div className="service_details_wrapper">
                    <div className="service_details_items">
                        <img src={img1} alt="img"/>
                        <div className="service_details_para">
                            <h3>Soluciones de Envíos</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse</p>
                        </div>
                    </div>
                    <div className="service_details_items">
                        <img src={img2} alt="img"/>
                        <div className="service_details_para">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut
                                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceContent
