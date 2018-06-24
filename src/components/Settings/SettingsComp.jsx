import React, { PureComponent } from 'react'

import { Wrapper } from './../'

class SettingsComp extends PureComponent {
  selectAndGo(appName) {
    this.props.selectApp(appName)
    this.props.setRoute(0)
    this.props.history.push('/')
  }

  render() {
    return (
      <Wrapper>
        <div>
          <p>Current App is: <strong>{this.props.currentApp}</strong></p>
          <button onClick={() => this.selectAndGo('TML_APP')}>Select TML_APP</button>
        </div>
      </Wrapper>
    )
  }
}

export default SettingsComp
