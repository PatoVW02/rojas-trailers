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
            para="Ofrecemos soluciones integrales de entrega y distribución para asegurar que su carga sea entregada con la máxima eficiencia. Nos encargamos de todo el proceso logístico, desde la recogida de mercancías hasta su distribución final, garantizando puntualidad y seguridad en cada paso."
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
                    <h2>Transporte de Carga Completa</h2>
                  </div>
                  <p>
                    Nos especializamos en el transporte de carga completa, ofreciendo un servicio directo y sin paradas para asegurar que su mercancía llegue rápidamente a su destino. Ideal para envíos grandes y urgentes.
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
                    <h2>Transporte de Carga Consolidada</h2>
                  </div>
                  <p>
                    Ofrecemos transporte de carga consolidada, agrupando múltiples envíos en un solo tráiler para optimizar costos y tiempos de entrega. Perfecto para envíos de menor volumen que requieren eficiencia y seguridad.
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
