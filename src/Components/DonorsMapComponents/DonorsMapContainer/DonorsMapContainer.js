import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react'
import Spinning from 'grommet/components/icons/Spinning';

import DonorsMap from '../DonorsMap/DonorsMap';


export class DonorsMapContainer extends Component{
  render(){
    return(
      <DonorsMap
          donors={this.props.donors}
          google={this.props.google} />
    )
  }
}

const LoadingContainer = (props) => (
     <Spinning size='xlarge' />
)

export default GoogleApiWrapper({
  apiKey: (`AIzaSyDnXYgSKyV4HhkmPDXxOOpDFjNaUJPqomQ`),
  LoadingContainer: LoadingContainer,
  v:3.13,
})(DonorsMapContainer)
