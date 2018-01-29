import React from 'react'
import Section from './Section'
import bg from './images/worker.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>Service Workers</h1>
    <h1 className='title is-5' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white', textAlign: 'right'}}>Drop off the work, and get a call when it's done.</h1>
  </Section>
)