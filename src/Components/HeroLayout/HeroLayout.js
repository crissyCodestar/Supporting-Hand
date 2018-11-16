import React from 'react';
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Title from 'grommet/components/Title';
import Headline from 'grommet/components/Headline';


const HeroLayout = ({img, hTwo, headline}) => (
  <Hero
      size='large'
      background={<Image src={img} fit='cover' full={true} />}
      backgroundColorIndex='dark'>
          <Box
              direction='row'
              justify='center'
              align='center'>
                  <Box
                      basis='1/2'
                      align='end'
                      pad='medium' />
                  <Box
                      basis='1/2'
                      align='start'
                      pad='medium'>
                          <Heading
                              margin='none'
                              tag='h2'>
                                  {!!hTwo ? hTwo : null}
                          </Heading>
                          <Headline strong={true}
                              size='medium'
                              style={{textShadow:' 2px 2px 8px #000'}}
                              >
                              {headline}
                          </Headline>
                  </Box>
          </Box>
  </Hero>
);

export default HeroLayout;
