import React from 'react'
import Section from './Section'
import png from './images/js.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0,0,0,0.7)', padding: '1em', color: 'white'}}>The Stack</h1>
    <img src={png} style={{position: 'absolute', right: '3rem', top: '3rem', height: '40vmin', height: '40vmin', boxShadow: '5px 5px 5px black'}}/>
  </Section>
)