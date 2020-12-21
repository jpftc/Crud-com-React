//importando css
import './Main.css'
// importando React
import React from 'react'
// Importando Header
import Header from './Header'

// exportando main
export default props =>
    // React Fragment para envolver mais de um elemento
    <React.Fragment>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </React.Fragment>