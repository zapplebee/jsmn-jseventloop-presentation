import React from 'react'
import Section from './Section'
import clock from './images/clock.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${clock})`, backgroundSize: 'cover'}}>
    <h1 className='title is-1' style={{margin: 0}}>Exploring the JavaScript</h1>
    <h1 className='title is-1'>Event Loop</h1>
    <h2 className='subtitle is-4' style={{color: '#555'}}>Zachary Skalko | @zapplebee</h2>
  </Section>
)