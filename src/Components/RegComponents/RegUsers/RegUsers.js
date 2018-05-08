import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';

import DonorsList from '../../DonorsComponents/DonorsList/DonorsList';

class RegUsers extends Component{
  render(){
      const { usersList } = this.props;
      const user = this.props.usersList
    return(
        <Section align='center'>
                <Heading
                        uppercase={true}
                        truncate={false}
                        align='center'
                        margin='none'>
                              Saved searches
                  </Heading>
                        <Paragraph
                              align='center'
                              size='large'
                              pad='medium'  >
                                    Thank you for registering with Supporting Hand to assist Donors Choose in thier mission to help teacher, student and schools.
                                     They make it easy for anyone to help a classroom in need, moving us closer to a nation where students in every community
                                     have the tools and experiences they need for a great education.
                        </Paragraph>
                              <Tiles fill="true"
                                    size="small"
                                    colorIndex='neutral-1'
                                    margin='medium'  >
                                        { usersList.map(user =>(
                                              <Tile separator='top'
                                                    align='center'
                                                    pad='small'
                                                    wide="false">
                                                          <Header size='medium'
                                                                  pad={{"horizontal": "small"}}>
                                                                      <Anchor tag='h5' >
                                                                            <Link to={{ pathname: `${user.url}`, state: { user: user} }} >
                                                                                    <Heading tag='h3'
                                                                                              strong={true}
                                                                                              margin='none'>
                                                                                                      Thank you for your support {user.fullNameInput}
                                                                                    </Heading>
                                                                            </Link>
                                                                      </Anchor>
                                                          </Header>
                                                    <Box pad='none'>
                                                              <Heading tag='h4' >
                                                                        Search results for classrooms in need near {user.zipCodeInput}
                                                              </Heading>
                                                    </Box>
                                              </Tile>
                                        ))}
                              </Tiles>

       </Section>
    )
  }
}

export default RegUsers;
