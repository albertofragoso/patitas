import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pet from '../pages/Pet'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import { auth } from '../utils/firebase'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'

import '../styles/global.css'
import 'toastr/build/toastr.css'

const App = ({ setUser, setLogin }) => {

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if(user) { 
        setUser(user)
        setLogin(true)
      }
    })
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/:id/pets" component={Pet} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={() => <h1 style={{ textAlign: "center" }}>404 Not found 😯</h1>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({ login: state.login })

const mapDispatchToProps = {
  setUser,
  setLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(App)