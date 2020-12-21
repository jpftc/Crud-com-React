//importando css
import './Logo.css'
// Importando logo
import logo from '../../assets/imgs/logo.png'
// importando React
import React from 'react'
import{ Link } from 'react-router-dom'

// exportando logo
export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>