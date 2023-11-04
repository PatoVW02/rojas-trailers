import React from "react";
// Import SectionHeading
import SectionHeading from "../Common/SectionHeading";
import img1 from "../../assets/img/service/serv-1.jpg";
import img2 from "../../assets/img/service/serv-2.jpg";

const ServicesCard = () => {
  return (
    <>
      <section id="services_page">
        <div className="container">
          <SectionHeading
            heading="Entrega y Distribución"
            para="Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectet lorem ipsum dolor sit amet"
          />
          <div className="service_wrapper_top">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_img">
                  <img src={img1} alt="About_Img" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_content">
                  <div className="heading-left-border">
                    <h2>Servicio 1</h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text lorem, fordating lorem
                    ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                    dolor. Lorem Ipsum is simply dummy text lorem, fordating
                    lorem ipsum dolor sit amet, consectetur adipiscing lorem
                    ipsum dolor. Lorem Ipsum is simply dummy text lorem,
                    fordating lorem ipsum dolor sit amet, consectetur adipiscing
                    lorem ipsum dolor. - PH
                  </p>
                </div>
              </div>
            </div>

            <br />
            <br />

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_content">
                  <div className="heading-left-border">
                    <h2>Servicio 2</h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text lorem, fordating lorem
                    ipsum dolor sit amet, consectetur adipiscing lorem ipsum
                    dolor. Lorem Ipsum is simply dummy text lorem, fordating
                    lorem ipsum dolor sit amet, consectetur adipiscing lorem
                    ipsum dolor. Lorem Ipsum is simply dummy text lorem,
                    fordating lorem ipsum dolor sit amet, consectetur adipiscing
                    lorem ipsum dolor. - PH
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="about_img">
                  <img src={img2} alt="About_Img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesCard;
