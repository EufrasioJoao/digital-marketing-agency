import React, {useState} from 'react'
import Card from '../../components/Card/Index'
import Style from './Style.module.css'

const HomePage = () => {


  // states
  const [menuToggle, setMenuToggle] = useState(false)

  const handleClick = ()=>{
    setMenuToggle(!menuToggle)
  }

  return (
    <div className={Style.hero}>
      <div className={Style.hero_Content_Container}>
        <div data-aos="fade-down" className={Style.content}>
          <h1>Nosso compromisso e com o <br/>seu sucesso!</h1>
          <p>Em uma epoca em que a confianca esta em primeiro lugar!</p>
          <div className={Style.contentButtons}>
            <button>Conheca nossa empresa</button>
            <button>Duvidas? Pergunte aqui</button>
          </div>
        </div>
      </div>

      {/* Serviices  Section */}
      <section className={Style.services}>
        <header>
          <h1 data-aos="fade-right">Conheca nossos principais servicos</h1>
          <div><span></span> <p>&#8681;</p> <span></span></div>
        </header>

        <div className={Style.services_card_container}>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
          <Card image='images/icons/subject-icon-4.png' title='Random Title' description='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius fugit sunt accusamus blanditiis?'/>
        </div>

        <div className={Style.services_link_container}>
          <h1 data-aos="fade-up">Conheca todos os servicos da nossa empresa e o porque <br/>de escolher nossa empresa</h1>
          <button data-aos="fade-up">Clique aqui</button>
        </div>
      </section>

      {/* content  Section */}
      <section className={Style.latest_content}><br /><br />
        <header>
          <h1>Fique por dentro dos nossos produtos e atualize-se</h1>
          <div><span></span> <p>&#8681;</p> <span></span></div>
        </header>

        <div className={Style.products_card_container}>
          <div data-aos="fade-right">
            <img src="images/product3.jpeg" alt="" />  
            <p>Random product from blsblsbsbbs</p>
          </div>
          <div data-aos="fade-up">
            <img src="images/product3.jpeg" alt="" />
            <p>Random product from blsblsbsbbs</p>
          </div>
          <div data-aos="fade-right">
            <img src="images/product3.jpeg" alt="" />
            <p>Random product from blsblsbsbbs</p>
          </div>
          <div data-aos="fade-up">
            <img src="images/product4.jpg" alt="" />
            <p>Random product from blsblsbsbbs</p>
          </div>
        </div>

        <button>Confira mais aqui</button>
      </section>
    </div>
  )
}

export default HomePage
