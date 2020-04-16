import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { RecetteContext } from '../../context/Provider'
import { auth } from '../../firebase/firebase'
import './Header.style.scss'

const Header = () => {
  const { currentUser } = useContext(RecetteContext)

  const showAdminLink = () => {
    if (currentUser && currentUser.email === 'eric.hamimi@gmail.com') {
      return <Link className="nav-item nav-link" to="/admin" >Admin</Link>
    }
  }



  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Les Recettes des Amis</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to='/recettes'>Les Recettes <span className="sr-only">(current)</span></Link>
 
          {showAdminLink()}
          
        </div>        
      </div>
      <div className="navbar-nav nav-right">
        { currentUser ?  ( <Link className="nav-item nav-link" onClick={()=>auth.signOut()}>Déconnexion</Link>) :
          (
            <Link className="nav-item nav-link" to="/inscription">Se Connecter</Link>            
          )
        }
        
      </div>
    </nav>
  ) 
}

export default Header
