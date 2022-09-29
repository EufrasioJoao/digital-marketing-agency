import React from 'react'
import Style from './Style.module.css'

const Footer = () => {

  
  return (
    <div className={Style.footer}>
      <div data-aos="fade-up" className={Style.footer_span}>
        <h1>Conheca todos os servicos da nossa empresa e o porque <br/>de escolher nossa empresa</h1>
        <button>Clique aqui</button>
      </div>
      
      <div className={Style.footer_row}>
        <div data-aos="fade-right">
          <h2>Localizacao</h2>
          <h2><span>Endereco</span></h2>
          <br />
          <p>Cidade de Nampula</p>
        </div>
        <div data-aos="fade-right">
          <h2>Contacto</h2>
          <h2><span>Telemovel</span></h2>
          <br />
          <p>+285847623731</p>
          <p>+285847623731</p>
        </div>
        <div data-aos="fade-up">
          <h2>Suporte</h2>
          <h2><span>Email</span></h2>
          <br />
          <a href='/'>eufrasiojoao00@gmail.com</a>
        </div>
        <div data-aos="fade-up">
          <h2>Midias</h2>
          <h2><span>Sociais</span></h2>
          <br />
          <a href='/'>Facebook</a>
          <a href='/'>Instagram</a>
        </div>
      </div>

      <div className={Style.copyRight}>
        <p>CopyRight &copy; 2022 | Junilson = Todos os direitos reservados</p>
        <p>Developer | Eufrasio Joao | +258847623731</p>
      </div>
    </div>
  )
}

export default Footer
