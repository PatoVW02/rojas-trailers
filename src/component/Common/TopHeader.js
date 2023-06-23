import React from 'react'
import {Link} from 'react-router-dom';

// TopHeader Area
const TopHeader = () => {
    return (
        <>
            <div className="top-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <ul className="left-info">
                                <li>
                                    <a href="mailto:hello@transtics.com">
                                        <i className="far fa-envelope"></i>
                                        rojastrailers@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+823-456-879">
                                        <i className="fas fa-phone-volume"></i>
                                        00 1111 2222
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <ul className="right-info">
                                <li className="mr-20">
                                    <Link to="/contact">Soporte</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopHeader
