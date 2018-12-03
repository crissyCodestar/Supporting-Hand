import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Spinning from 'grommet/components/icons/Spinning';


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
        const {google} = this.props;
        const maps = google.maps;
        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef);
        // const infowindow = new maps.InfoWindow();
        const bounds = new maps.LatLngBounds({lat: Number(40.7485722), lng: Number(-74.0068633)});

        const mapConfig = Object.assign({}, {
          center: bounds,
          zoom: 11,
          scaleControl: true,
          mapTypeId: 'roadmap'
        })


        this.map = new maps.Map(node, mapConfig);

        this.props.donors.map( donor => {
          //Set location for bound area and zoom
          const loc = new maps.LatLng(Number(donor.lat), Number(donor.long) );
            bounds.extend(loc);
            //Marker position
  console.log(donor.id)
          const marker =new maps.Marker({
            map: this.map,
          //  position: {lat:Number(donor.lat), lng:Number(donor.long) },
            position: loc,
            label: `${donor.id}`

          });

            this.map.fitBounds(bounds);
            this.map.panToBounds(bounds);
          const infowindow = new google.maps.InfoWindow({
            marker: this.marker,
            content:`hello`
        });
        //   marker.addListener('click', () => {
        //   infowindow.setContent('click')
        //   infowindow.open(this.map, marker);
        //   console.log('marker', this.map, infowindow, infowindow.content);
        // });
        console.log('marker', marker);
      })
    }
  }

  render() {
    const style = {
      width:'30vw',
      height:'60vh',
      backgroundColor:'#0a64a0',
      margin:'auto',
      padding:'10rem',
    }
    console.log(this.props.google.maps);
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
