import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';

import {ScriptCache} from './lib/ScriptCache';
import GoogleApi from './lib/GoogleApi';


export class Container extends Component{

  render(){
      if(!this.props.loaded){
        return(
          <Sidebar
              colorIndex='neutral-1'
              fixed={true}>
                  Loading...
          </Sidebar>
        )
      }
    return(
      <Sidebar
          colorIndex='neutral-1'
          fixed={true}>
          Map goes here
      </Sidebar>
    )
  }
}
export default GoogleApiComponent({
  apiKey: `AIzaSyDnXYgSKyV4HhkmPDXxOOpDFjNaUJPqomQ`
})(Container)
