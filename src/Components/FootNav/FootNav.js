import React from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';




const FootNav = () => {
  const d = new Date();
  return(
      <Footer justify='between'
        margin={{'vertical':'small'}}
        >
      <Title>
        <s />
         Supporting Hands
      </Title>
      <Box direction='row'
        align='center'
        pad={{"between": "medium"}}>
        <Paragraph margin='none'>

          © {d.getFullYear()} Grant
        </Paragraph>
        <Menu direction='row'
          pad='small'
          size='small'
          dropAlign={{"right": "right"}}>
          <Anchor href='#'>
            Support
          </Anchor>
          <Anchor href='#'>
            Contact
          </Anchor>
          <Anchor href='#'>
            About
          </Anchor>
        </Menu>
      </Box>
    </Footer>
  )
}


export default FootNav;
