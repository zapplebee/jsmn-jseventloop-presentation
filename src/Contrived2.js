import React from 'react'
import Section from './Section'
import bg from './images/giant.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>Roll 20-sided die to determine if you can do a thing. A roll of 20 is a critical success.</h1>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>With "disadvantage" you must roll two 20-sided dice and take the lesser result.</h1>
  </Section>
)