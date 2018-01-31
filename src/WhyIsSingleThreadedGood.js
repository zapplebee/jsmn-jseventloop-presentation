import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Why is single threaded good?</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Easier to debug</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Logical to write</h1></li>
      </ol>
    </div>
  </Section>
)