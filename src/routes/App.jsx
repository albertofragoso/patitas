import React from 'react'
import Layout from '../components/Layout'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Pet from '../pages/Pet'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

import '../styles/global.css'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id/mascotas" component={Pet} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route component={() => <h1 style={{ textAlign: "center" }}>404 Not found 😯</h1>} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App