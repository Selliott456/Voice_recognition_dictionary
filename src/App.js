import React from 'react'
import Home from './components/Home'
import NoMatch from './components/NoMatch'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="*" component={NoMatch} status={404}/>
    </Switch>
  </BrowserRouter>
)


export default App