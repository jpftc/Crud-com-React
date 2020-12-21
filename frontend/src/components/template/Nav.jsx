//importando css
import './Nav.css'
// importando React
import React from 'react'
import { Link } from 'react-router-dom'

// exportando logo
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
    </aside>