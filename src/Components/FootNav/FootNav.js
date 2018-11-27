import React from 'react';
import {Link} from 'react-router-dom';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Image from 'grommet/components/Image';

import {logo} from '../../photos';



const FootNav = () => {
const d = new Date();
return(
    <Footer justify='between'
      pad={{'vertical':'small'}}
      style={{backgroundColor:'#0a64a0'}}>
        <Title
        style={{fontSize:'1rem',
                color:'#fff'}}>
          <s />
          Supporting Hand
        </Title>
        <Box direction='row'
          align='center'
          margin='small'
          pad={{"between": "medium"}}>
            <Paragraph margin='small'
                style={{color:'#fff'}}>
                © {d.getFullYear()} Grant
            </Paragraph>

        </Box>
    </Footer>
  )
}


export default FootNav;
