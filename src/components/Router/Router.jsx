import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Profile, Settings } from './../'

class RouterComponent extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </Router>
    )
  }
}

export default RouterComponent
