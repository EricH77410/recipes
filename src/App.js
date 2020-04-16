import React, { useEffect, useContext } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { auth } from './firebase/firebase'
import { RecetteContext } from './context/Provider'

// Components
import Home from './pages/Home/Home'
import Inscription from './pages/Inscription/Inscription'
import Recettes from './pages/Recettes/Recettes.page'
import RecetteDetail from './components/Recette-details/Recette-details'
import Header from './components/Header/Header'
import NotFound from './components/NotFound/NotFound'
import Admin from './pages/Admin/Admin'

const App = () => {
  const { login, logout, currentUser } = useContext(RecetteContext)
  useEffect(() => {
    if (!currentUser) {
      auth.onAuthStateChanged(async user =>{
        if (user) {
          console.log('user: ', user)
          login(user)
        } else {
          console.log('no current user')
          logout()          
        }
      })  
    }    
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/recettes' component={Recettes}/>
        <Route path='/recettes/:id' component={RecetteDetail}/>

        <Route 
          exact 
          path='/inscription' 
          render={ () => currentUser ? (<Redirect to="/" />) : (<Inscription/>) }
        />
        
        <Route 
          exact 
          path='/admin'
          render={ 
            () => {
              if (currentUser && currentUser.email === 'eric.hamimi@gmail.com') {
                return <Admin />
              }
              return <Redirect to="/"/>
            }
          }
        />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App

