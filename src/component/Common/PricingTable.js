import React from 'react'
import {Link} from 'react-router-dom';
//Import SectionHeading
import SectionHeading from './SectionHeading'

// Pricing data
  
const pricingData =[
   {
      title:"Plan Basico",
      amount:"100",
      items:[
         {icons:"fa fa-check", text:"Servicio Disponible" },
         {icons:"fa fa-times", text:"Servicio no Disponible" },
      ]
   },
   {
      title:"Plan Popular",
      amount:"200",
      items:[
         {icons:"fa fa-check", text:"Servicio Disponible" },
         {icons:"fa fa-times", text:"Servicio no Disponible" },
      ]
   },
   {
      title:"Plan Premium",
      amount:"300",
      items:[
         {icons:"fa fa-check", text:"Servicio Disponible" },
         {icons:"fa fa-times", text:"Servicio no Disponible" },
      ]
   }
]

const PricingTable = () => { 
 return (
  <>
  <section id="home_pricing_area">
   <div className="container">
   <SectionHeading heading="Nuestros Precios" para="Pitch para contratación - PH"/>
    <div class="row">

         {pricingData.map((data, index)=>(
             <div class="col-lg-4 col-md-6 col-sm-12" key={index}>
             <div class="price-table mrb-30 text-center">
              <div class="table-header">
               <h4 class="pricing-plan-name">{data.title}</h4>
               <h3 class="price"><span class="price-currency">$</span>{data.amount}<span class="price-duration text-primary-color">/ Por Mes</span></h3>
              </div>
              <div class="table-content">
              <ul class="list-items">
                  {data.items.map((datas, index)=>(
                     <li key={index}><i class={datas.icons}></i>{datas.text}</li>
                  ))}
               </ul>
              </div>
              <div class="table-footer">
               <Link to="/pricing" class="btn btn-theme">Contratar</Link>
              </div>
             </div>
            </div>
         ))}

      </div>
   </div>
  </section>
  </>
 )
}

export default PricingTable

