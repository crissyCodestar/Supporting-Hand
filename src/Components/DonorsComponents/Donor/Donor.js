import React, {Component} from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Language from 'grommet/components/icons/base/Language';


class Donor extends Component {
  render(){
    const { school, total, cost, title, desc, url } = this.props.donor
    let totalValue = cost/total*100
      return(
          <Tiles>
              <Tile
                  pad='small'
                  separator='top'
                  align='start'>
                      <Header
                          size='small'
                          pad={{"horizontal": "small"}}>
                              <Heading
                                  tag='h3'
                                  strong={true}
                                  margin='none'>
                                      <div dangerouslySetInnerHTML={ {__html: title } } />
                              </Heading>
                      </Header>
                      <Header
                          size='medium'
                          pad={{"horizontal": "small"}}>
                            <Heading
                                  tag='h2'
                                  strong={true}
                                  margin='none'>
                                    <div dangerouslySetInnerHTML={ {__html: school } } />
                            </Heading>
                      </Header>
                          <Box
                            pad='none'>
                                <Box
                                  responsive={true}
                                  pad={{"horizontal": "small"}}>
                                    <Meter
                                        vertical={false}
                                        size='large'
                                        value={totalValue}
                                        colorIndex='accent-2'/>
                                          <Box
                                            direction='row'
                                            justify='between'
                                            pad={{"between": "small"}}
                                            responsive={true}>
                                                <Value
                                                    value={`Raised $${cost}`}
                                                    size='xsmall' />
                                                        <Label
                                                            size='small'>
                                                            Goal ${total}
                                                        </Label>
                                          </Box>
                                </Box>
                                    <Paragraph
                                            dangerouslySetInnerHTML={ {__html: desc } } >
                                    </Paragraph>
                                        <Anchor
                                            size='small'
                                           icon={<Language />}
                                           href={url}
                                           label='Make a donation here!' />
                         </Box>
                 </Tile>
          </Tiles>
    );
  }
}

export default Donor;
