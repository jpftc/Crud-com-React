// Importando react
import React from 'react'
// Importando dependemcias do router
import { Switch, Route, Redirect } from 'react-router'

// Importando componentes
import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        <Redirect from='*' to='/' />
    </Switch>