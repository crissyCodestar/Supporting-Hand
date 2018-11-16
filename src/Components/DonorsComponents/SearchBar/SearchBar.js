import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Search from 'grommet/components/Search';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';


class SearchBar extends Component{
  constructor(){
    super();
    this.state={
      term:'',
      serched:false
    }
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event){
    this.setState({
      term:event.target.value
    })
  }

  handleSearch(event){
    this.props.searchDonorsList(this.state.term)
    this.setState({serched:true})
    event.preventDefault();
  }


  render(){
    return(
    <Section
          pad='none'
          align='center'
          margin='large'>
            <Heading
                tag='h2'
                uppercase={true}>
                  Find a classroom to support
            </Heading>
                <Box
                    justify='around'
                    direction='row'
                    alignContent='between'

                  >
                  <Box
                      pad='small'
                    >
                        <Search
                            size="medium"
                            inline={true}
                            dropAlign={{"left": "left"}}
                            iconAlign='start'
                            placeHolder="Search By ZipCode, State, Topic or School"
                            onDOMChange={this.handleTermChange} />
                      </Box>
                      <Box
                          pad='small'
                        >
                      <Button
                      fill={true}
                        accent={true}
                            pad='small'
                            margin='small'
                            label='Search'
                            onClick={this.handleSearch}
                            type='submit' />
                    </Box>
                </Box>
      </Section>
    )
  }
}

export default withRouter(SearchBar);
