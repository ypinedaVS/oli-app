import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { Router, Wrapper } from './components'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Wrapper />
        </Router>
      </Provider>
    )
  }
}

export default App
