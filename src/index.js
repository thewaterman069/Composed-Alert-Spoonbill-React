import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Calendar from './views/calendar'
import Home from './views/home'
import Privacy from './views/privacy'
import About from './views/about'
import Contact from './views/contact'
import Inschrijven from './views/inschrijven'
import Page from './views/page'
import Gallery from './views/gallery'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Calendar} exact path="/calendar" />
        <Route component={Home} exact path="/" />
        <Route component={Privacy} exact path="/privacy" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Inschrijven} exact path="/inschrijven" />
        <Route component={Page} path="**" />
        <Route component={Gallery} exact path="/gallery" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
