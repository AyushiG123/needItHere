import React, {Component} from 'react'
import {geolocated} from 'react-geolocated'
import Geocode from 'react-geocode'

class GeoLocation extends Component {
  constructor(props)
  {
    super(props);
    //Geocode.setApiKey("AIzaSyCY1CoJKHYqnxNP5PTDBQl7ZvRx1E-BwlM");
    Geocode.enableDebug();
    this.state = {address: '', error: false, hasCoords: false, message: '', coords: {}};
    this.getUserLocation = this.getUserLocation.bind(this);
  }
    componentDidUpdate() {
      if (!this.state.hasCoords) {
        this.getUserLocation();
      }
    }

    render() {
      if (this.state.error) {
        return (
          <span>
            {this.state.message}
          </span>
        );
      } else {
        return (
          <div>
            {this.state.address}
          </div>
        );
      }
    }

    getUserLocation(){
      if (this.props.isGeolocationAvailable && this.props.isGeolocationEnabled && this.props.coords) {
        Geocode.fromLatLng(this.props.coords.latitude, this.props.coords.longitude).then(
          response => {
            const address = response.results[0].formatted_address;
            this.setState({error: false, hasCoords: true, coords: this.props.coords, address: address});
            //console.log(address);
          },
          error => {
            console.error(error)
          });
      } else {
        this.setState({error: true, message: 'Location not enabled.'})
      }
      
    }

  }
  
  export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(GeoLocation);