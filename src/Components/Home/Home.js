import React from 'react';

import RegContainer from '../RegComponents/RegContainer/RegContainer';
import RegUsers from '../RegComponents/RegUsers/RegUsers';
import Section from 'grommet/components/Section';
import HeroLayout from '../HeroLayout/HeroLayout';
import {heroImg} from '../../photos';

const Home = () => (
        <Section>
            <HeroLayout
                img={heroImg}
                headline='Supporting Hand'
              />
            <RegContainer />
        </Section>
);

export default Home;
