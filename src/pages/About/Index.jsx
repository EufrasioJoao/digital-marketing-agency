import React from 'react'
import Card from '../../components/Card/Index'
import Style from './Style.module.css'

const AboutPage = () => {



  return (
    <div className={Style.about}>
      <div className={Style.about_Content_Container}>
        <div data-aos="fade-down" className={Style.content}>
          <h1>Um pouco sobre nos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quod maxime. Placeat, commodi. Ullam assumenda consectetur inventore corrupti, repellendus dolorum!</p>
        </div>
      </div>

      {/* information  Section */}
      <section data-aos="fade-up" className={Style.information}>
        <h3>Informacao</h3>
        <p>Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem debitis labore, saepe expedita magni culpa, obcaecati quibusdam, cupiditate velit porro neque? Adipisci doloremque sit laudantium expedita asperiores ad. Ratione atque culpa error pariatur nihil? Placeat praesentium aspernatur neque dolores vel voluptatibus tempore. Dolorum adipisci voluptas porro deleniti itaque natus veritatis! sit amet, consectetur adipisicing elit. Non cupiditate sequi asperiores debitis veritatis quidem ipsam modi nulla, iste quo!</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia ea quasi quo distinctio natus? Non corporis facere cupiditate ea at fugiat eum ullam alias inventore, cumque officiis, quasi esse. Ea molestias animi eius? Ullam vitae atque consequatur quae unde id?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod aliquid similique quisquam illo aut odio voluptate id iste. Veniam at id repudiandae, obcaecati, aut nulla harum odit aliquid ipsa blanditiis voluptas neque ab vitae dolorum consequuntur ratione voluptatum est sapiente quae magni. Distinctio inventore facilis doloribus magni asperiores reprehenderit eligendi impedit nobis. Perferendis id reiciendis earum eos eligendi sunt, exercitationem possimus ipsa deserunt soluta! Ut aspernatur atque doloremque reprehenderit! Itaque?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt totam est corporis sapiente dolorum sequi distinctio a neque inventore vero ut soluta minus cum, aliquam perferendis nostrum omnis voluptatum reiciendis corrupti eaque atque, nihil earum numquam! Tenetur officiis alias sequi tempora quod, ad ipsa. Quia earum, eligendi accusantium recusandae eius quasi minima assumenda, tempore saepe quisquam ea veritatis totam repudiandae nostrum. Quidem obcaecati corporis dolorum dolorem quas quae. Officiis laudantium voluptate ad, excepturi tempore nulla ducimus. Laborum nihil laboriosam eos eligendi obcaecati libero quidem voluptates incidunt ipsa ea quo sed nemo enim magni non optio, perspiciatis itaque. Fuga temporibus in, animi perspiciatis minus ad deserunt voluptas debitis nobis harum repellat ex necessitatibus nulla. Amet alias magnam ut vitae earum quam?</p>
      </section>


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

export default AboutPage
