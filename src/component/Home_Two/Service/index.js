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
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
              para="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
