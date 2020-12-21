// Importando css do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
// importando css font-awesome
import 'font-awesome/css/font-awesome.min.css'
// Importando css
import './App.css'
// Importando react
import React from 'react'
// Importando router
import { BrowserRouter } from 'react-router-dom'

// Importando rotas
import Routes from './Routes'

// Importando templates
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>
