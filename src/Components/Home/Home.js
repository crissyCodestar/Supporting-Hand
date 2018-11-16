import React from 'react';

import RegContainer from '../RegComponents/RegContainer/RegContainer';
import RegUsers from '../RegComponents/RegUsers/RegUsers';
import Section from 'grommet/components/Section';
import HeroLayout from '../HeroLayout/HeroLayout'

const Home = () => (
        <Section>
            <HeroLayout
                img={'https://c1.staticflickr.com/4/3837/14173066439_a131eed12e_b.jpg'}
                hTwo='Welcome to...'
                headline='Supporting Hands'
              />
            <RegContainer />
        </Section>
);

export default Home;
