import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { setRoute } from './../../redux/actions/actions'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
})

class Wrapper extends Component {
  render() {
    const { classes, currentRoute, setRoute } = this.props

    return (
      <div>
        <Link to="/">
          <Button
            variant="contained"
            className={classes.button}
            color={currentRoute === 0 ? 'primary' : 'default'}
            onClick={() => setRoute(0)}
          >
            Home
          </Button>
        </Link>
        <Link to="/profile">
          <Button
            variant="contained"
            className={classes.button}
            color={currentRoute === 1 ? 'primary' : 'default'}
            onClick={() => setRoute(1)}
          >
            Profile
          </Button>
        </Link>
        <Link to="/settings">
          <Button
            variant="contained"
            className={classes.button}
            color={currentRoute === 2 ? 'primary' : 'default'}
            onClick={() => setRoute(2)}
          >
            Settings
          </Button>
        </Link>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ currentRoute }) => ({ currentRoute })

const mapDispatchtoProps = (dispatch) => ({
  setRoute: route => dispatch(setRoute(route))
})

Wrapper.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchtoProps)(withStyles(styles)(Wrapper))
