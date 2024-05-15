import React from 'react'
// Import SectionHeading
import SectionHeading from '../../Common/SectionHeading'
// Import ServiceCard
import ServiceCard from '../../Common/Service/ServiceCard'
// Import ServiceData
import {ServiceData} from '../../Common/Service/ServiceData'
//  OwlCarousel Slider Import
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const ServiceHomeTwo = () => {

    let responsive = {
        0: {
            items: 1,
        },
        600: {
            items: 1,
        },
        960: {
            items: 2,
        },
        1200: {
            items: 2,
        },
    }
    return (
      <>
        <section id="home_two_service">
          <div className="container">
            <SectionHeading
              heading="Nuestra Misión"
              para="Nuestra misión es proporcionar a nuestros clientes soluciones de transporte confiables y seguras, asegurando que cada carga llegue a su destino de manera eficiente y a tiempo."
            />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  className="service_slider_home_two"
                  style={{ textAlign: "center" }}
                >
                  <OwlCarousel
                    className="owl-theme"
                    responsive={responsive}
                    autoplay={true}
                    autoplayHoverPause={true}
                    autoplayTimeout={2500}
                    loop={false}
                    nav={false}
                    margin={30}
                  >
                    {ServiceData.map((data, index) => (
                      <ServiceCard
                        img={data.img}
                        heading={data.heading}
                        para={data.para}
                        button={data.button}
                        key={index}
                      />
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="home_two_service">
          <div className="container">
            <SectionHeading
              heading="Nuestra Visión"
              para="Nuestra visión es ser la empresa líder en la industria de transporte, reconocida por nuestro compromiso con la calidad, la innovación y la satisfacción del cliente."
            />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  className="service_slider_home_two"
                  style={{ textAlign: "center" }}
                >
                  <OwlCarousel
                    className="owl-theme"
                    responsive={responsive}
                    autoplay={true}
                    autoplayHoverPause={true}
                    autoplayTimeout={2500}
                    loop={false}
                    nav={false}
                    margin={30}
                  >
                    {ServiceData.map((data, index) => (
                      <ServiceCard
                        img={data.img}
                        heading={data.heading}
                        para={data.para}
                        button={data.button}
                        key={index}
                      />
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="home_two_service">
          <div className="container">
            <SectionHeading
              heading="Nuestros Valores"
              para="Nos guiamos por la integridad, actuando con honestidad y transparencia. Nos comprometemos a cumplir nuestras promesas, siempre buscando la innovación para mejorar nuestros servicios. Asumimos la responsabilidad de nuestras acciones, asegurando alta calidad y confiabilidad. Fomentamos el trabajo en equipo para lograr el éxito de nuestros clientes."
            />
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div
                  className="service_slider_home_two"
                  style={{ textAlign: "center" }}
                >
                  <OwlCarousel
                    className="owl-theme"
                    responsive={responsive}
                    autoplay={true}
                    autoplayHoverPause={true}
                    autoplayTimeout={2500}
                    loop={false}
                    nav={false}
                    margin={30}
                  >
                    {ServiceData.map((data, index) => (
                      <ServiceCard
                        img={data.img}
                        heading={data.heading}
                        para={data.para}
                        button={data.button}
                        key={index}
                      />
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default ServiceHomeTwo
