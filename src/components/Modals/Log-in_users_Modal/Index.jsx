import React, {useState} from 'react'
import Style from './Style.module.css'

const Log_in = ({onClose = ()=>{}, logUser = ()=>{}}) => {

  // states 
  const [name, setUsername] = useState(null)
  const [password, setUPassword] = useState(null)
  const [message, setMessage] = useState(null)
  

  // function to submit values
  const handleSubmit = (e)=>{
    e.preventDefault()

    // object to be submited
    const info = {
      name,
      password
    }

    // post request to the server
    fetch('http://localhost:3001/api/administrators/login', {
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
        onClose()
        logUser()
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
        <h3>Log in</h3>
        <input required type="text" placeholder='Nome de usuario' onChange={(e)=>setUsername(e.target.value)}/>
        <input required type="password" placeholder='Sua password' onChange={(e)=>setUPassword(e.target.value)}/>
        {message && <div className={Style.message}>{message}</div>}
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default Log_in
