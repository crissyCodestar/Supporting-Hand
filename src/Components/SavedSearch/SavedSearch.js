import React, { Component } from 'react';

import RegUsers from '../RegComponents/RegUsers/RegUsers';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import HeroLayout from '../HeroLayout/HeroLayout';
import Anchor from 'grommet/components/Anchor';




class SavedSearch extends Component{
  constructor() {
    super();
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
    return  (
        <div
          style={{paddingTop:'2rem'}}>
            <Anchor
              pad='medium'
              href='/#signUp'
              style={{color:'#0a64a0',
                      textDecoration:'none'}}>
              <Heading
                    strong={false}
                    uppercase={true}
                    truncate={false}
                    align='center'
                    margin='medium'
                  >
                          Sign up to save searches


              </Heading>
            </Anchor>
        </div>
      )
    }
    return  <RegUsers usersList={this.state.usersList}/>
}




  render(){
      console.log(this.props);
      return(
        <Section
            justify='center'
            >
            <HeroLayout
              headline='Saved Searches'
              img={'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/k-s50-ae-0328901_1.jpg?auto=format&con=3&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1400&s=a49a228fb84ef1afe0907cbfe06f0908'}/>
            {this.renderUserHome()}
        </Section>

      )
  }
}

export default SavedSearch;
