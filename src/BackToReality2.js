import React from 'react'
import Section from './Section'
import png from './images/js.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>You're using a front-end framework</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>It is pretty difficult to actually stack overflow</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>Milliseconds of blocking may be better than unmaintainable code</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>You're probably not doing anything too complex to show a delay</h1>
  </Section>
)