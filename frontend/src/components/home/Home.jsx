// Importando react
import React from 'react'
// Importando Main
import Main from '../template/Main'

// Criando componente funconal
export default props =>
    <Main icon="home" title="Início" subtitle="Segundo Projeto de React.">
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema de cadastro em React</p>
    </Main>