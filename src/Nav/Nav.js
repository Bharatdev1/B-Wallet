import React from 'react';
import { useTranslation } from "react-i18next";

import {BrowserRouter as Router, NavLink,Routes, Route} from 'react-router-dom'

import Home from '../WebData/Home'
import About from '../WebData/About'
import Information from '../WebData/Information'
const Nav = () => {
    const { t } = useTranslation();
    return (
    <Router>
        {/* style={{backgroundColor:"#ccccff"}} */}
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#ccccff"}}    >
    <NavLink className="navbar-brand"  to='/'>E-Wallet</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className='nav-link' to='/'><i className="fa-solid fa-house-user"></i> {t('Home')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to='/About'><i className="fa-solid fa-circle-info"></i> {t('About')}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' to='/Information'><i className="fa-solid fa-file-circle-question"></i> {t('Why')}</NavLink>
        </li>
        <li className="nav-item">
          <button className='btn mr-2 nav-link'>{t('Login')}</button>
        </li>
      </ul>
    </div>
    <h4><i className="fa-solid fa-wallet " /> {t('Wallet')} 0.0</h4>
  </nav>
    <Routes>
          <Route exact path="/"  element={<Home/>} />
          <Route exact path="/About"  element={<About/>}/>
          <Route exact path="/Information"  element={<Information/>}/>
    </Routes>
</Router>
  )
}

export default Nav