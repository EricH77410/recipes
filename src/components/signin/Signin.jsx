import React, { useState } from 'react'
import Input from '../FormInput/FormInput'
import { auth, signInWithGoogle } from '../../firebase/firebase'
// import { RecetteContext } from '../../context/Provider'

const Signin = () => {
  const [credentials, setCredentials] = useState({})
  const [login, setLogin] = useState(false)

  const handleChange = e => {
    const { value, name } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (login) {  
      try {
        await auth.signInWithEmailAndPassword(credentials.email, credentials.password)
        setCredentials({})
      } catch(error) {
        console.log(error)
      }
    } else {
      if (credentials.password !== credentials.confirmPassword) {
        alert('La confirmation ne correspond pas au mot de passe')
        return
      }
      try {
        await auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        setCredentials({})
      } catch (error) {
        console.log(error)
      }
      
    }    
  }

  const buttonText = login ? "Se connecter" : "S'inscrire"
  const loginText = login ? "Créer un compte": "J'ai déjà un compte"

  return (
    <>    
    <div className="signin-left col-sm">
    </div>
    <div className="signin-right col-sm">
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Email" name="email" handleChange={handleChange} required/>
        <Input type="password" label="Mot de passe" name="password" handleChange={handleChange} required/>
        {
          !login ? <Input type="password" label="Confirmation Mot de passe" name="confirmPassword" handleChange={handleChange} required/> : ''
        }
        
        <div className="signin-action">
          <button type="submit" className="btn btn-primary">
            {buttonText}
          </button>
          <button className="btn btn-primary" onClick={signInWithGoogle}>
            {`${buttonText} avec Google`} 
          </button>                    
        </div>
        <h4 className="signin-action-login" onClick={()=>setLogin(!login)}>{loginText}</h4>       
      </form>            
    </div>
    </>
  )
}

export default Signin
