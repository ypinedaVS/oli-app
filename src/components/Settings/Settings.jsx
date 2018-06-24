import React, { Component } from 'react'
import { connect } from 'react-redux'

import SettingsComp from './SettingsComp'
import { selectApp, setRoute } from './../../redux/actions/actions'

class Settings extends Component {
  render() {
    return (
      <SettingsComp {...this.props} />
    )
  }
}

const mapStateToProps = ({ currentApp }) => ({ currentApp })
const mapDispatchToProps = (dispatch) => ({
  selectApp: appName => dispatch(selectApp(appName)),
  setRoute: route => dispatch(setRoute(route))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings)
