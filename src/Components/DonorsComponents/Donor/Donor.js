import React, {Component} from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Language from 'grommet/components/icons/base/Language';


class Donor extends Component {



  render(){
    const { id, school, total, cost, title, desc, url, img } = this.props.donor
    console.log(img);
    let totalValue = cost/total*100
    return(




    <Tiles background={<Image src={img}
          fit='cover'
          full={false} />} >
        <Tile separator='top'
              align='start'>
            <Header size='small'

                    pad={{"horizontal": "small"}}>
                  <Heading tag='h4'
                            strong={true}
                            margin='none'>
                            {title}
                  </Heading>
            </Header >
            <Header size='small'

                    pad={{"horizontal": "small"}}>
                  <Heading tag='h2'
                            strong={true}
                            margin='none'>
                            {school}
                  </Heading>
            </Header>
                  <Box pad='small'
                        >
                  <Box responsive={true}

                        pad={{"horizontal": "small"}}>
                    <Meter
                      vertical={false}
                      size='large'
                      value={totalValue}
                      colorIndex='accent-2'
                       />
                    <Box direction='row'
                      justify='between'
                      align='center'
                      pad={{"between": "small"}}
                      responsive={true}>

                      <Value value={`$${cost}`}
                        size='xsmall' />
                      <Label size='small'>
                        Goal ${total}
                      </Label>
                    </Box>
                  </Box>
                  <Paragraph margin='small'>
                        {desc}
                  </Paragraph>
            <Anchor
                    size='small'
                   icon={<Language />}
                   href={url}
                   label='Check out the donors page' />
            </Box>
        </Tile>
    </Tiles>



    );
  }
}

export default Donor;
