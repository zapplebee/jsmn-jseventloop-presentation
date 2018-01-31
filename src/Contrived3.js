import React from 'react'
import Section from './Section'
import bg from './images/giant.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>You come upon a sleeping giant</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>Nothing you can do can wake him</h1>
    <h1 className='title is-3' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>You must roll a critical success to move him away from the entrance to the cave</h1>
  </Section>
)