import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import TakeMyLocationComp from './TakeMyLocationComp'
import { search } from './../../redux/actions/actions'

class TakeMyLocation extends PureComponent {
  innerRef

  constructor() {
    super()
    this.getInnerRef = this.getInnerRef.bind(this)
    this.getLocation = this.getLocation.bind(this)
  }

  getInnerRef(ref) {
    this.innerRef = ref
  }

  getLocation() {
    this.innerRef && this.innerRef.getLocation()
  }

  render() {
    const { getLocation, getInnerRef } = this

    return (
      <TakeMyLocationComp
        ref={getInnerRef}
        getLocation={getLocation}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  currentApp: state.currentApp,
  locations: state.locations
})

const mapDispatchtoProps = (dispatch) => ({
  search: () => dispatch(search())
})

export default connect(mapStateToProps, mapDispatchtoProps)(TakeMyLocation)
