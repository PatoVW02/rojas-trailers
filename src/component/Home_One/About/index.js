import React from 'react'
// About Img
import img1 from '../../../assets/img/home1/about.jpg'
import img2 from '../../../assets/img/home1/sign.png'
// Counter Data
// const CounterData = [
//     {
//         countStart: 100,
//         countEnd: 12345,
//         heading: "PAQUETES ENVÍADOS",
//         icon: " fas fa-building"
//     },
//     {
//         countStart: 100,
//         countEnd: 12345,
//         heading: "PAÍSES SOPORTADOS",
//         icon: "fas fa-globe"
//     },
//     {
//         countStart: 100,
//         countEnd: 12345,
//         heading: "PREOCUPACIONES DISMINUIDAS",
//         icon: " fas fa-building"
//     },
// ]

const HomeAbout = () => {
    return (
        <>
            <section id="home_about_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_img">
                                <img src={img1} alt="About_Img"/>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="about_content">
                                <div className="heading-left-border">
                                    <h2>¿Por qué Elegirnos?</h2>
                                </div>
                                <h3>Lorem Ipsum - PH</h3>
                                <p>Lorem Ipsum is simply dummy text lorem, fordating lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor. Lorem Ipsum is simply dummy text lorem, fordating lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor. Lorem Ipsum is simply dummy text lorem, fordating lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor. - PH</p>
                                <div className="about_sign_arae">
                                    <div className="distaion_area">
                                        <h5>Nombre Persona - PH</h5>
                                        <h6>Posicion en Compañía - PH</h6>
                                    </div>
                                    <div className="signature">
                                        <img src={img2} alt="About_Img"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="about_counter_area">
                        <div className="row">
                            {CounterData.map((data, index) => (
                                <Counter countStart={data.countStart} countEnd={data.countEnd} heading={data.heading}
                                         icon={data.icon} key={index}/>))}
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default HomeAbout
