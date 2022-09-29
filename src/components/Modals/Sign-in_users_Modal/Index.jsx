import React, {useState} from 'react'
import Style from './Style.module.css'

const Sign_in = ({onClose = ()=>{}, logUser = ()=>{}}) => {

  // states 
  const [name, setUsername] = useState(null)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setUPassword] = useState(null)
  const [message, setMessage] = useState(null)
  

  // submit values
  const handleSubmit = (e)=>{
    e.preventDefault()

    // object to be submited
    const info = {
      name,
      phone,
      email,
      password
    }

    // post request to the server
    fetch('http://localhost:3001/api/administrators/register', {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        'Content-TYpe': 'application/json'
      }
    }).then(res=>res.json())
    .then(data=>{
      setMessage(data.message)
      if(data.succes === true) {
        localStorage.setItem('username_key_value', data.name)
        logUser()
        onClose()
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className={Style.sign}>
      <form data-aos='fade-down' onSubmit={(e)=>handleSubmit(e)} className={Style.form}>
        <div onClick={onClose} className={Style.closeContainer}>
          <div className={Style.close}></div>
        </div>
        <h3>Sign in</h3>
        <input required type="text" placeholder='Nome de usuario' onChange={(e)=>setUsername(e.target.value)}/>
        <input required type="number" placeholder='Seu telefone' onChange={(e)=>setPhone(e.target.value)}/>
        <input required type="email" placeholder='Seu e-mail' onChange={(e)=>setEmail(e.target.value)}/>
        <input required type="password" placeholder='Sua password' onChange={(e)=>setUPassword(e.target.value)}/>
        {message && <div className={Style.message}>{message}</div>}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Sign_in
