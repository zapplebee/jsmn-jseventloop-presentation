import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>GPU</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Negatives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Subset of JS</h1><p>Can't use full JS toolkit</p><blockquote style={{whiteSpace: 'pre-line'}}>
          {`gpu.js relies on the assumption that the kernel function is using only a subset of legal JavaScript syntax:

          1D, 2D, 3D array of numbers or just numbers as kernel input
          1D, 2D, 3D array of numbers as kernel output
          Number variables
          Custom and custom native functions
          Arithmetic operations (+, +=, -, *, /, %)
          Javascript Math functions (Math.floor() and etc.)
          Loops
          if and else statements
          const and let
          No variables captured by a closure`}</blockquote></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Blocks the main thread</h1><p>Although very fast, still thread blocking</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Limited Compatibility</h1><p>[citation needed]</p></li>
      </ol>
    </div>
  </Section>
)