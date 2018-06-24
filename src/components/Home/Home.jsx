import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { Wrapper, TakeMyLocation } from './../'

class Home extends PureComponent {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Wrapper>
        {this.props.currentApp === 'TML_APP' && <TakeMyLocation />}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  currentApp: state.currentApp
})

export default connect(mapStateToProps)(Home)
