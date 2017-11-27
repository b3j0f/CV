import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './pages/home/Home'
import CV from './pages/cv/CV'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/home' component={Home} />
    <Route path='/cv' component={CV} />
  </Switch>
)
