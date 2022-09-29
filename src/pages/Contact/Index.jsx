import React, {useState} from 'react'
import Card from '../../components/Card/Index'
import Style from './Style.module.css'

const ContactPage = () => {

  // states 
  const [name, setName] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [subject, setUSubject] = useState(null)
  const [message, setMessage] = useState(null)
  const [infoMessage, setInfoMessage] = useState(null)
  

  // submit values
  const handleSubmit = (e)=>{
    e.preventDefault()

    // object to be submited
    const info = {
      name,
      phone,
      email,
      subject,
      message,
    }

    // post request to the server
    fetch('http://localhost:3001/api/emails/send', {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        'Content-TYpe': 'application/json'
      }
    }).then(res=>res.json())
    .then(data=>{
      setInfoMessage(data.message)
      console.log(data);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className={Style.contact}>
      <div className={Style.contact_Content_Container}>
        <div data-aos="fade-down" className={Style.content}>
          <h1>Fale connosco</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quod maxime. Placeat, commodi. Ullam assumenda consectetur inventore corrupti, repellendus dolorum!</p>
        </div>
      </div>

      {/* form  Section */}
      <section data-aos="fade-up" className={Style.form_section}>
        <form onSubmit={(e)=>handleSubmit(e)} className={Style.form}>
          <h3>Contacte-nos por email preenchendo os campos abaixo</h3>
          <input type="text" required placeholder='Seu nome' onChange={(e)=>setName(e.target.value)}/>
          <input type="number" required placeholder='Seu telefone' onChange={(e)=>setPhone(e.target.value)}/>
          <input type="email" required placeholder='Seu email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" required placeholder='Assunto' onChange={(e)=>setUSubject(e.target.value)}/>
          <textarea name="" id="" cols="30" required placeholder='Sua mensagem' rows="10" onChange={(e)=>setMessage(e.target.value)}></textarea>
          {infoMessage && <div className={Style.message}>{infoMessage}</div>}
          <button>Enviar</button>
        </form>
      </section>


      {/* Serviices  Section */}
      <section className={Style.services}>
        <header>
          <h1 data-aos="fade-right">Tire suas duvidas sobre nossos servicos</h1>
        </header>

        <div className={Style.services_card_container}>
          <Card image='images/icons/twitter.png' title='Ligue-nos' description='Entre em contacto com a nossa empresa, estaremos sempre disponiveis, ligue para +258847623731'/>
          <Card image='images/icons/twitter.png' title='Whatsapp' description='Envie uma mensagem para a nossa empresa, +258847623731'/>
          <Card image='images/icons/twitter.png' title='Facebook' description="Siga a nossa pagina no facebook, pagina: Bla Bla"/>
          <Card image='images/icons/twitter.png' title='Envie-nos um Email' description='Entre em contacto com a nossa empresa, mande uma mensagem para, eufrasiojoao00@gmail.com'/>
        </div>
      </section>

    </div>
  )
}

export default ContactPage
