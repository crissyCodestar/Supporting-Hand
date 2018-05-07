import React, { Component } from 'react';
import { Redirect } from "react-router";

import RegContainer from '../RegContainer/RegContainer';
import User from '../User/User';

import Section from 'grommet/components/Section';

class Home extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
       openLayer: false,
       usersList:[],
       donors:[],
    }
    this.renderUserHome = this.renderUserHome.bind(this);

  }


componentDidMount(){
  let usersList = JSON.parse(localStorage.getItem('usersList'))
  let donors = JSON.parse(localStorage.getItem('donors'));
  this.setState({ usersList: usersList, donors:donors})
}

renderUserHome(){
  const {usersList} =this.state
  if(!usersList || usersList == null){
    return
  }
  return <User usersList={this.state.usersList} />
}




  render(){

console.log(this.state.usersList);

      return(
        <Section>
            <RegContainer />
            {this.renderUserHome()}
        </Section>

      )
  }
}




export default Home;
