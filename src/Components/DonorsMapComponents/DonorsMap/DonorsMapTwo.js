import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Spinning from 'grommet/components/icons/Spinning';


 class DonorsMap extends Component {
   constructor(){
     super();
     this.state={
       donors:this.props.donors
     }
   }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google || prevProps.donors !== this.props.donors) {
      this.loadMap();
    }
  }

  componentWillReceiveProps(nextProps){
        if(nextProps.donors !== this.props.donors){
            this.setState({donors:nextProps.donors});
        }
    }


callback = (results, status) => {
  for(var i = 0; i < results.length; i++) {
    this.renderMarkers(results[i]);
  }
}

renderMarkers = (place) => {
  let marker = new this.maps.Marker({
    position: {lat: parseFloat(place.geometry.location.lat()), lng: parseFloat(place.geometry.location.lng())},
    map: this.map,
    title: 'Hello World!'
  });

  marker.addListener('click', () => {
    this.infowindow.setContent('test');
    this.infowindow.open(this.map, marker);
  });
}

  loadMap() {
      if (this.props && this.props.google) {
        const {google} = this.props;
        const maps = google.maps;
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
        const infowindow = new maps.InfoWindow();
        const mapConfig = Object.assign({}, {
          center: {lat: 40.7485722, lng: -74.0068633},
          zoom: 11,
          scaleControl: true,
          mapTypeId: 'roadmap'
        })



        onGoogleApiLoaded = ({map, maps}) => {
          this.map = map;
          this.maps = maps;
          this.infowindow = maps.InfoWindow();
          var address = {lat: this.props.address.lat, lng: this.props.address.lng};
          var service = new maps.places.PlacesService(map);
          service.nearbySearch({
            location: address,
            radius: 2000,
            types: ['school']
          }, this.callback);
        }


        this.map = new maps.Map(node, mapConfig);
        const bounds = new google.maps.LatLngBounds();
        this.props.donors.map( donor => {
          //Set location for bound area and zoom
          const loc = new google.maps.LatLng(donor.lat, donor.long);
            bounds.extend(loc);
            //Marker position

          const marker =new google.maps.Marker({
            map: this.map,
          //  position: {lat:Number(donor.lat), lng:Number(donor.long) },
          position: loc,
            title: 'donor.school',

          });

            this.map.fitBounds(bounds);
            this.map.panToBounds(bounds);
          const infowindow = new maps.InfoWindow({
            marker: this.marker,
            content:`hello`
        });
          marker.addListener('click', function() {
          infowindow.open(this.map, marker, this.content);
        });
      })
    }
  }

  render() {
    const style = {
      width:'100%',
      height:'auto',
      backgroundColor:'#0a64a0',
      margin:'auto',
      padding:'10rem'
    }
    return (
      <div ref="map" style={style}>
          <Spinning
          justify='center'
          align='center'
          size='xlarge' />
      </div>
    )
  }
}

export default DonorsMap;
