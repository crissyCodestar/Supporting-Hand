import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const defaultOptions = {
  defaultCenter: {lat:40.727505, lng:-73.969217},
  defaultZoom: 13
};

 class DonorsMap extends Component {
   constructor(props){
     console.log(props);
     super(props);
     this.state={
       donors:this.props.donors,
      currentCenter:defaultOptions.defaultCenter
     }
   }




  componentDidUpdate(prevProps, prevState) {

    if (prevProps.google !== this.props.google || prevProps.donors !== this.props.donors) {

      this.loadMap();
    }
  }
//
//   getNewCenter= results =>{
//   console.log(results)
// if(results.length === 0){
// return this.state.center
// }
//   let lats=results.map((art)=> {
//
//     return art.the_geom.coordinates[1]
//   })
//   let lngs=results.map((art)=> {
//     return art.the_geom.coordinates[0]
//   })
//
//   let minLat = Math.min(...lats)
//   let maxLat = Math.max(...lats)
//   let minLng = Math.min(...lngs)
//   let maxLng = Math.max(...lngs)
//
//   let newLat = (minLat + maxLat) /2
//   let newLng = (minLng + maxLng) /2
//   return   {lat:newLat, lng:newLng}
// }

  loadMap() {
    if (this.props && this.props.google) {
      const {google, donors} = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      // this.state.currentCenter = this.getNewCenter(this.props.resultArr)
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
          location: (loc);
          bounds.extend(loc);
          //Marker position
        const marker =new google.maps.Marker({
          map: this.map,
          position: {lat:Number(donor.lat), lng:Number(donor.long) },
          title: donor.school,

        });

        this.map.fitBounds(bounds);
        this.map.panToBounds(bounds);
        console.log("SCHOOL: ",donor.school);
        var infowindow = new google.maps.InfoWindow({
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
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '50vw', // 90vw basically means take up 90% of the width screen. px also works.
      height: '100vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>

        loading map...

      </div>
    )
  }
  componentWillReceiveProps(nextProps){
        if(nextProps.donors !== this.props.donors){
            this.setState({donors:nextProps.donors});
        }
    }

}

export default DonorsMap;
