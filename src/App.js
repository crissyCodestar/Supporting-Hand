import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import RegContainer from './Components/RegContainer/RegContainer';
import DonorsList from './Components/DonorsComponents/DonorsList/DonorsList';
import Nav from './Components/Nav/Nav';
import 'grommet/grommet.min.css';
import '../node_modules/grommet-css';

class App extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/donors' component={DonorsList}/>
          <Route path="/donors/:user.uid/:user.zipCodeInput"  component={DonorsList} />
        </Switch>
      </div>
    );
  }
}

export default App;
