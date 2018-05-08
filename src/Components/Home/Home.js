import React, { Component } from 'react';

import RegContainer from '../RegComponents/RegContainer/RegContainer';
import RegUsers from '../RegComponents/RegUsers/RegUsers';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

class Home extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
       usersList:[],
    }
    this.renderUserHome = this.renderUserHome.bind(this);

  }


componentDidMount(){
  let usersList = JSON.parse(localStorage.getItem('usersList'))
  this.setState({ usersList: usersList})
}

renderUserHome(){
  const {usersList} =this.state
  if(!usersList || usersList == null){
    return  <Heading
                  strong={false}
                  uppercase={true}
                  truncate={false}
                  align='center'
                  margin='medium'>
                        Sign up to save searches
            </Heading>
    }
    return  <RegUsers usersList={this.state.usersList}/>
}




  render(){

console.log(this.state.usersList);

      return(
        <Section>
            <RegContainer />
                <Section  id="saved">
                    {this.renderUserHome()}
                </Section>
        </Section>

      )
  }
}




export default Home;
