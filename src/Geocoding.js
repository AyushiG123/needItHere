import Geocode from 'react-geocode'

            Geocode.setApiKey("AIzaSyCY1CoJKHYqnxNP5PTDBQl7ZvRx1E-BwlM")
            Geocode.enableDebug()
            Geocode.fromLatLng("this.props.coords.latitude", "this.props.coords.longitude").then(
              response => {
                const address = response.results[0].formatted_address;
                console.log(address);
              },
              error => {
                console.error(error)
              }
            )