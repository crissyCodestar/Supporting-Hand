import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

import DonorsList from '../DonorsComponents/DonorsList/DonorsList';

class User extends Component{
  render(){
    const { usersList } = this.props;
const user = this.props.usersList
    return(
        <Section align='center'>
              <Heading strong={false}
                  uppercase={true}
                  truncate={false}
                  align='center'
                  margin='medium'
                  >

                  </Heading>
                    <Paragraph align='center' size='large'  >
                    Thank you for registering with Supporting Hand to assist Donors Choose in thier mission to help teacher, student and schools.
                     They make it easy for anyone to help a classroom in need, moving us closer to a nation where students in every community
                     have the tools and experiences they need for a great education.
                    </Paragraph>
                    <Tiles fill="true"

                          size="large"
                          colorIndex='neutral-1'  >
                          { usersList.map(user =>(
                            <Tile separator='top'
                              align='start'
                              pad='small'
                              wide="true"
                              >
                              <Header size='medium'
                                pad={{"horizontal": "small"}}>

                                <Anchor size='small' tag='h5' >
                                  <Link to={{ pathname: `/donors/${user.uid}/${user.zipCodeInput}`, state: { donor: user} }} >

                                  <Heading tag='h4'
                                  strong={true}
                                  margin='none'>
                                    Profile search for {user.fullNameInput}
                                  </Heading>
                                  </Link>
                                </Anchor>
                              </Header>
                              <Box pad='small'>
                                <Paragraph margin='none'>
                                  Donor schools in need near {user.zipCodeInput}
                                  </Paragraph>
                              </Box>
                            </Tile>
                          ))}

                        </Tiles>
              <div>
                  <Route path="/donors/:user.uid/:user.zipCodeInput"  component={DonorsList} />
              </div>
        </Section>
    )
  }
}

export default User;
