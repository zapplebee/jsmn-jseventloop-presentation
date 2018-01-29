import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>GPU</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Positives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>True multithreading</h1><p>Bloody fast</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Local</h1><p>Doesn't require a network request. Scalable.</p></li>
      </ol>
    </div>
  </Section>
)