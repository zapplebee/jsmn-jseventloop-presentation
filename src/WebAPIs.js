import React from 'react'
import Section from './Section'
import png from './images/js.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>Web APIs</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>Many of the 'Window' object's methods are actually Web APIs.</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>setTimeout, requestAnimationFrame, XMLHttpRequest.</h1>
  </Section>
)