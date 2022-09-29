import React from 'react'
import Card from '../../components/Card/Index'
import Style from './Style.module.css'

const ServicesPage = () => {

  return (
    <div className={Style.about}>
      <div className={Style.about_Content_Container}>
        <div data-aos="fade-down" className={Style.content}>
          <h1>Nossos Servicos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quod maxime. Placeat, commodi. Ullam assumenda consectetur inventore corrupti, repellendus dolorum!</p>
        </div>
      </div>

      {/* Serviices  Section */}
      <section className={Style.services}>
        <div className={Style.services_card_container}>
          <Card image='images/icons/cancelar.png' title='Visao' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'/>
          <Card image='images/icons/cancelar.png' title='Objetivo' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'/>
          <Card image='images/icons/cancelar.png' title='Alcance' description="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
          <Card image='images/icons/cancelar.png' title='Visao' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'/>
          </div>
      </section>

    </div>
  )
}

export default ServicesPage
