import React, { Component } from 'react'
import { geolocated } from 'react-geolocated'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  calories: {
    color: '#bdbdbd',
    fontSize: 18
  },
  title: {
    color: '#33ACF5',
    marginBottom: 0
  },
  price: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 15
  },
  oldPrice: {
    color: '#bdbdbd',
    fontWeight: '300 !important'
  },
  thumbnails: {
    display: 'flex',
    marginTop: 20
  }
}

class TakeMyLocationComp extends Component {
  constructor(props) {
    super(props)
    this.state = { address: '' }
  }

  handleChange = (address) => {
    this.setState({ address })
  }

  handleSelect = (address) => {
    this.handleChange(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success: ', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const { search, locations, classes } = this.props

    return (
      <div>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
            <div style={{margin:'30px auto'}}>
              <input
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input'
                })}
              />
              <button onClick={() => search()}>Go</button>
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'
                  // inline style for demonstration purpose
                  const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                  return (
                    <div {...getSuggestionItemProps(suggestion, { className, style })}>
                      <span>{suggestion.description}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
        <Grid container className={classes.root} spacing={8}>
          {locations && locations.length > 0 && locations.map((location) => (
            <Grid key={location._id} xs={3} item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={location.picture}
                  title={location.description}
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2" className={classes.title}>
                    {location.description}
                  </Typography>
                  <Typography component="p" className={classes.calories}>
                    {location.calories} calories
                  </Typography>
                  <Typography component="h2" className={classes.price}>
                    {location.price} <span style={{color:'#bdbdbd',fontWeight:300,textDecoration:'line-through'}}>{location.old_price}</span>
                  </Typography>
                  <div className={classes.thumbnails}>
                    {location.thumbnails && location.thumbnails.map((img, index) => (
                      <img
                        key={index}
                        alt="product presentation"
                        src={img}
                        style={{marginRight:20}}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000,
  suppressLocationOnMount: true
})(TakeMyLocationComp))
