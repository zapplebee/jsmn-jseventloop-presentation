import React from 'react'
import Section from './Section'
import bg from './images/traffic.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>Thread Blocking</h1>
    <h1 className='title is-5' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white', textAlign: 'right'}}>Prevents the rest of your code from executing</h1>
  </Section>
)