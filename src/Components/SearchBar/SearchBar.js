import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import Search from 'grommet/components/Search';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';



class SearchBar extends Component{
  constructor(props){
    super(props);
    console.log(props);
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
<Section pad='medium'>
  <Header>
    <Search
            float={true}
            size="medium"
            inline={true}
            fill='false'
            dropAlign={{"top": "bottom"}}
            placeHolder="Search By ZipCode, State, Topic or School"
            onDOMChange={this.handleTermChange} />
    <Button
            accent={true}
            label='Search'
            onClick={this.handleSearch}
            type='submit' />
    </Header>
</Section>
    )
  }
}

export default withRouter(SearchBar);
