import React, { Component } from 'react';
import { Redirect } from "react-router";

import Form from 'grommet/components/Form';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import FormField from 'grommet/components/FormField';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import TextInput from 'grommet/components/TextInput';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Image from 'grommet/components/Image';



import DonorsList from '../DonorsComponents/DonorsList/DonorsList';
import hashed from './utils/hashId';
import FormErrors from './FormErrors/FormErrors';
import logo from '../logo/hand2.png';

class RegContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      activeIndex: 1,
      openLayer: false,
      usersList:[],
      user:{
          uid:"",
          fullNameInput: "",
          zipCodeInput: "",
          emailInput: "",
          url:"",
          registered: false,
        },
      errors: [],


    }
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }



handleChange(e) {
  const {user} = this.state;
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let statusCopy = Object.assign({}, this.state);
    statusCopy.user[inputName] = inputValue;

    this.setState(statusCopy);
  }

submitForm(event){

    event.preventDefault();
    const {user, users} = this.state;

    const errors = FormErrors(user);
    if (errors.length > 0) {
      this.setState({ errors});
      return;
    }


    let userState = {...this.state}
    userState.user.registered = true;
    userState.user.uid = hashed()
    userState.user.url = `/donors/${user.uid}/${user.zipCodeInput}`
    this.setState({userState})

    if(localStorage.getItem('usersList') == null){
      const usersList = [];
      usersList.push(user);
      localStorage.setItem('usersList', JSON.stringify(usersList))
    }else{
      const usersList = JSON.parse(localStorage.getItem('usersList'))
      usersList.push(user);
      localStorage.setItem('usersList', JSON.stringify(usersList))
    }
    this.setState({
      usersList:JSON.parse(localStorage.getItem('usersList'))
    })

    localStorage.setItem('user', JSON.stringify(user));

}




  render(){
    const { user } = this.state;
    const { errors } = this.state
    if(user.registered) {

      return <Redirect to={`/donors/${user.uid}/${user.zipCodeInput}`}  />


    }

    return(
  <Section align='center'>

        <Section align='center'>
            <Header>
                <Heading>
                    Welcome to Supporting Hand
                </Heading>

              </Header>
              <Paragraph align='center' size='medium'>
                  We are a supporting online platform dedicated to bringing awarness to organizations
                   such as DonorsChoose.org that empowers public school teachers from across the country.
                   DonorsChoose.org makes it easy for anyone to help a classroom in need. Public school teachers
                   from every corner of America create classroom project requests, and you can give any amount to the project that inspires you.
              </Paragraph>

          </Section>

              <Image src={logo} size='small'/>
                  <Section align='center'
                        responsive='true'
                        alignSelf='stretch'
                        pad='large'
                        full='horizontal'
                        colorIndex='neutral-1'>
                    <Heading tag='h3'>
                        Register to recieve information on schools in your neighborhood who are in need.
                    </Heading>
                <Form >
                      <Heading tag='h2'>
                         Be Apart of Supporting Hand
                      </Heading>
                      <Header pad='small' >
                          <Heading tag='h1'>
                              Sign Up!
                          </Heading>
                      </Header>
                          {errors.map(error => (
                      <Paragraph key={error}>Error: {error}</Paragraph>
                      ))}
                      <FormField label='Full Name'
                                pad='small'
                                margin='small'

                                fill={true}
                                className='reg_width'>
                            <TextInput
                                size='large'

                                value={user.fullNameInput}
                                name='fullNameInput'
                                onDOMChange={this.handleChange}/>
                    </FormField>
                    <FormField label='Zip Code'
                                size='large'
                                fill={true}>
                            <TextInput

                              value={user.zipCodeInput}
                              name='zipCodeInput'
                              onDOMChange={this.handleChange}/>
                    </FormField>
                    <FormField
                        size='large'
                        label='Email'
                        fill={true}
                        >
                            <TextInput

                                value={user.emailInput}
                                name='emailInput'
                                onDOMChange={this.handleChange}/>
                    </FormField>

                    <Footer pad={{"vertical": "medium"}}>

                        <Button
                            colorIndex='light-2'
                            accent='true'
                            box='true'
                            pad='small'
                            label='Submit'
                            type='submit'
                            fill={false}
                            onClick={this.submitForm} />


                        </Footer>
                    </Form>
              </Section>
        </Section>

    )
  }
}

export default RegContainer;
