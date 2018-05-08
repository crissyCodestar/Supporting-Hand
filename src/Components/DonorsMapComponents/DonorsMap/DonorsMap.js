import React, { Component } from 'react';
import ReactDOM from 'react-dom'


 class DonorsMap extends Component {
   constructor(props){
     super(props);
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

  loadMap() {
      if (this.props && this.props.google) {
        const {google, donors} = this.props;
        const maps = google.maps;
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
        const mapConfig = Object.assign({}, {
          center: {lat: 40.7485722, lng: -74.0068633},
          zoom: 11,
          scaleControl: true,
          mapTypeId: 'roadmap'
        })


        this.map = new maps.Map(node, mapConfig);
        const bounds = new google.maps.LatLngBounds();
        this.props.donors.map( donor => {
          //Set location for bound area and zoom
          const loc = new google.maps.LatLng(donor.lat, donor.long);
            bounds.extend(loc);
            //Marker position
          const marker =new google.maps.Marker({
            map: this.map,
            position: {lat:Number(donor.lat), lng:Number(donor.long) },
            title: donor.school,

          });
            this.map.fitBounds(bounds);
            this.map.panToBounds(bounds);
            //console.log("SCHOOL: ",donor.school);
          const infowindow = new google.maps.InfoWindow({
            marker: this.marker,
            content:`${donor.school}`
        });
          marker.addListener('click', function() {
          infowindow.open(this.map, marker, this.content);
        });
      })
    }
  }

  render() {
    const style = {
      width: '50vw',
      height: '100vh'
    }
    return (
      <div ref="map" style={style}>
          loading map...
      </div>
    )
  }
}

export default DonorsMap;
