import React from 'react'
import Section from './Section'
import bg from './images/server.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-1' style={{backgroundColor: 'black', padding: '1em', color: 'white'}}>XHR, AJAX, Axios, Fetch...</h1>
  </Section>
)