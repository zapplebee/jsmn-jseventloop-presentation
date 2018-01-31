import React from 'react'
import Section from './Section'
import png from './images/js.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>The Event Loop</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>If there is something on the stack, it takes from there.</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>When the stack is empty it takes from the callback queue.</h1>
  </Section>
)