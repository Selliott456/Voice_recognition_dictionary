import React from 'react'
import Home from './components/Home'
import Results from './components/Results'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/results" component={Results} />
    </Switch>
  </BrowserRouter>
)


export default App