import React, {Component} from 'react';
import {defaultDonors, filterDonors} from '../utils/donorsApi';
import Donors from '../Donors/Donors';
import DonorsMapContainer from '../../DonorsMapComponents/DonorsMapContainer/DonorsMapContainer';
import SearchBar from '../../SearchBar/SearchBar';
// import Search from 'grommet/components/Search';
// import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Spinning from 'grommet/components/icons/Spinning';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';




class DonorsList extends Component{
  constructor(props) {
    console.log(props.user);
    super(props);
    this.state = {
      donors : [],
      loading: true,
      userValues:this.props.user,
      user:this.props.location.state

    }
    this.searchDonorsList = this.searchDonorsList.bind(this);
    this.renderDonors = this.renderDonors.bind(this);
    this.checkUser = this.checkUser.bind(this);

  }







checkUser(){
  const {user} =this.state


  if(!user || user == null){
    return (
      defaultDonors().then(donors => {
      this.setState({donors:donors, loading:false});
    })
    )
  }
  const term = user.donor.zipCodeInput
  return (

    filterDonors(term).then(donors => {
  this.setState({donors:donors, loading:false});
})

)
}


componentDidMount() {
      this.checkUser();
}


searchDonorsList(term){
  filterDonors(term).then(donors =>{
    this.setState({ donors:donors })
    localStorage.setItem( 'donors', JSON.stringify(donors))

  })
    .catch(err => {
      return <h1>No Result, try again</h1>
    })
}


renderDonors(){
  const isLoading = this.state.donors

  return this.state.loading ? (
     <Spinning size='xlarge' />
  ) : (
    <div>
      <Donors donors={this.state.donors} />
    </div>
  )
}

  render(){
    console.log(this.state.donors);
console.log(this.state.user);

    return(
    <Section >
  
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
                                    donors={this.state.donors}
                                    />
                  </Sidebar>
            </Split>

      </Section>

    )
  }
}

export default DonorsList;
