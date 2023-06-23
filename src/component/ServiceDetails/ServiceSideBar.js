import React from 'react'
import {Link} from 'react-router-dom';
// ServiceSideBar Area
const ServiceSideBar = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="service_details_sidebar">
                    <div className="sidebar_service_wrappers">
                        <h3>Nuestros Servicios</h3>
                        <ul>
                            <li><Link to="/service">Financiamiento</Link></li>
                            <li><Link to="/service">Planes de Contingencia</Link></li>
                            <li><Link to="/service">Envíos</Link></li>
                        </ul>
                    </div>
                    {/* <div className="sidebar_service_wrappers">
                        <h3>Our Brochures</h3>
                        <ul>
                            <li><a href="#!"> <i className="far fa-file-pdf"></i> Service Brochure.Pdf</a></li>
                            <li><a href="#!"><i className="far fa-file-word"></i> About Company.Doc</a></li>
                        </ul>
                    </div> */}
                    <div className="sidebar_service_wrappers">
                        <h3>Contactanos</h3>
                        <div className="contact_sidebar">
                            <h6>Dirección</h6>
                            <p>Cofre de Perote 5701, Villa Mitras, 64170 Monterrey, N.L.</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Llamanos</h6>
                            <p>Oficina: 00 1111 2222</p>
                        </div>
                        <div className="contact_sidebar">
                            <h6>Correo Electrónico</h6>
                            <p>rojastrailers@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceSideBar
