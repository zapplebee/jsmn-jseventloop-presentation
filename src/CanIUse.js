import React from 'react'
import Section from './Section'
import asset from './images/caniweb.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <div style={{width: '100%', display: 'flex'}}>
    <img src={asset} controls={true} loop={true} style={{height: '80vh', alignSelf: 'center', margin: 'auto'}}/>
    </div>
  </Section>
)