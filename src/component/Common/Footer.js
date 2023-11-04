import React from 'react'
import {Link} from 'react-router-dom';
// Import Logo Import
import logo from '../../assets/img/logo2.png'

const FooterItems = [
    {
        title: "Acceso Rapido",
        links: [
            {linkTitle: "Inicio", link: "/"},
            {linkTitle: "Acerca de Nosotros", link: "/about"},
            {linkTitle: "Nuestros Servicios", link: "/service"},
            {linkTitle: "Contactanos", link: "/contact"},
        ],
    },
    {
        title: "Documentos",
        links: [
            {linkTitle: "Política de Privacidad", link: "/privacyPolicy"},
            {linkTitle: "Términos y Condiciones", link: "/terms"},
        ],
    }
]

const Footer = () => {
    return (
        <>
            <footer id="footer_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                            <div className="footer_wedget">
                                <img src={logo} alt="logo_img" style={{maxWidth: '6rem'}} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Expedita eligendi aperiam harum eaque, dicta facere iste exercitationem</p>
                                {/* <div className="footer_social_icon">
                                    <a href="#!"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#!"><i className="fab fa-twitter"></i></a>
                                    <a href="#!"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#!"><i className="fab fa-instagram"></i></a>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer_wedget">
                                {FooterItems.slice(0, 1).map((data, index) => (
                                    <FooterWidget data={data} key={index}/>
                                ))}

                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">

                            <div className="footer_wedget">
                                {FooterItems.slice(1, 2).map((data, index) => (
                                    <FooterWidget data={data} key={index}/>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                            <div className="footer_wedget">
                                <h4>Contactanos</h4>
                                <div className="contact-info-footer">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>Dirección - PH</li>
                                        <li><i className="far fa-envelope"></i> <a
                                            href="mailto:hello@demo.com"> rojastrailers@gmail.com</a></li>
                                        <li><i className="fas fa-phone-volume"></i> <a href="tel:+0123-456-789"> 00 1111 2222</a></li>
                                        <li><i className="far fa-clock"></i>Horarios</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer

export const FooterWidget = ({data}) => (
    <>
        <h4>{data.title}</h4>
        <ul>
            {data.links.map((datas, index) => (
                <li key={index}><Link to={datas.link}>{datas.linkTitle}</Link></li>
            ))}
        </ul>
    </>
)
