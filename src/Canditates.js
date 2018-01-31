import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Real-World Candidates for Thread Blocking</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Geometric computations</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Image Processing</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Recursive DOM exploration/modification</h1></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Computations on User Events (Scroll Events in particular)</h1></li>
      </ol>
    </div>
  </Section>
)