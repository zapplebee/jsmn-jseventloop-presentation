import React from 'react'
import Section from './Section'
import bg from './images/six.jpg'

export default (props) => (
  <Section className='is-warning is-bold'>
    <div style={{width: '100%', display: 'flex'}}>
    <video src='/single.mp4' loop={true} controls={true} style={{height: '80vh', alignSelf: 'center', margin: 'auto'}}/>
    </div>
  </Section>
)