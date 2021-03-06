import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Web Workers</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Negatives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>None. They're excellent. Use them today.</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-6'>Actually one. They have not access to the DOM</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-6'>Actually another. They're truly asynchronous and don't automatically share about their origin</h1></li>
      </ol>
    </div>
  </Section>
)