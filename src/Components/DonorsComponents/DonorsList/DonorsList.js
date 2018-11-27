import React, {Component} from 'react';

import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Spinning from 'grommet/components/icons/Spinning';
import Section from 'grommet/components/Section';

import {defaultDonors, filterDonors} from '../utils/donorsApi';
import Donors from '../Donors/Donors';
import DonorsMapContainer from '../../DonorsMapComponents/DonorsMapContainer/DonorsMapContainer';
import SearchBar from '../SearchBar/SearchBar';
import HeroLayout from '../../HeroLayout/HeroLayout';
import {donorSearch} from '../../../photos'




class DonorsList extends Component{
  constructor(props) {
    super(props);
    this.state = {
      donors : [],
      loading: true,
      userValues:this.props.user,
      user:this.props.location.state,
      currentUser:this.props.location.state

    }
    this.searchDonorsList = this.searchDonorsList.bind(this);
    this.renderDonors = this.renderDonors.bind(this);
    this.queryDonorsList = this.queryDonorsList.bind(this);

  }



queryDonorsList(){
  const {currentUser} =this.state
    if(!currentUser || currentUser == null){
      return (
        defaultDonors().then(donors => {
        this.setState({donors:donors, loading:false});

      })

    )
  }

  const term = currentUser.user.zipCodeInput
      return (
        filterDonors(term).then(donors => {
        this.setState({donors:donors, loading:false});
    })
  )
}

componentDidMount(){
  this.queryDonorsList();
}

searchDonorsList(term){
  filterDonors(term).then(donors =>{
    this.setState({ donors:donors })

  })
    .catch(err => {
      return <h1>No Result, try again</h1>
  })
}


renderDonors(){
  const style = {

    backgroundColor:'#166ca5',
    width:'100%',
    height:'auto',
    margin:'auto'

  }
  return this.state.loading ? (
     <Spinning
      justify='center'
      align='center'
      size='xlarge' />
  ) : (
    <div style={style}>
      <Donors donors={this.state.donors} />
    </div>
  )
}

  render(){
    let counter = 0
    let arr=[{"home": 5}, {"home":3}]


console.log(arr.push({"home":4}));
    console.log(arr);

    return(
        <Section>
            <HeroLayout
                img={donorSearch}
                headline='Donor Search'
              />
            <SearchBar searchDonorsList={this.searchDonorsList} />
                <Split
                      separator={true}
                      showOnResponsive='both'
                      fixed={true}>
                        <Box
                            colorIndex='neutral-1-t'
                            justify='center'
                            align='center'
                            pad='none'>
                                {this.renderDonors()}
                        </Box>
                        <Sidebar
                              colorIndex='neutral-1'
                              pad='none'
                              fixed={false}
                              full={false}>
                                    <DonorsMapContainer
                                          donors={this.state.donors}/>
                        </Sidebar>
                </Split>

        </Section>
      )
   }
}

export default DonorsList;
