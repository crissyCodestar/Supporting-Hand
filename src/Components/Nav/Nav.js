import React from 'react';
import {Link} from 'react-router-dom';
import HeroLayout from '../HeroLayout/HeroLayout';

import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';

import {logo} from '../../photos';



const Nav = () =>{
    return(
          <Section
              direction='row'
              margin='none'
              >
                    <Header
                        justify='end'
                        colorIndex='light-1'
                        float={true}
                        pad={{'horizontal':'medium', 'left':'xlarge'}}
                        size='small'
                        fixed={true}
                        >
                            <Link to='/'><Image src={logo} margin='small'  pad={{'left':'xlarge'}} size='thumb'>
                              </Image>
                              </Link>
                                  <Box
                                    flex={true}
                                    justify='end'
                                    direction='row'

                                    pad={{'horizontal':'medium'}}
                                    responsive={true}>
                                        <Menu

                                            responsive={true}
                                            inline={true}
                                            pad={{'horizontal':'medium'}}
                                            margin={{'top': 'small'}}
                                            direction='row'
                                            >

                                                <Anchor tag='h5'>
                                                      <Link to='/donors' style={{color:'#0a64a0'}}>Donor Search</Link>
                                                </Anchor>
                                                <Anchor tag='h5' >
                                                      <Link to='/user_search' style={{color:'#0a64a0'}}>Saved Searches</Link>
                                                </Anchor>
                                                  <div>|</div>
                                                <Anchor tag='h5'>
                                                      <a style={{color:'#0a64a0'}} href='https://www.donorschoose.org/about'>
                                                            Visit DonorsChoose.org
                                                      </a>
                                                </Anchor>
                                        </Menu>
                                  </Box>
                    </Header>


        </Section>

  )
}

export default Nav;
