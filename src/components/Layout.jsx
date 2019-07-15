import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout