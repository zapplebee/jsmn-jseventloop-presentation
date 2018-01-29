import React from 'react'
import Section from './Section'
import thread from './images/thread.jpg'

export default (props) => (
  <Section className='is-warning is-bold' style={{backgroundImage: `url(${thread})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <h1 className='title is-1' style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '1em', color: 'white'}}>But it's not <i>real</i> multithreading. It's "multiprocessing" or "parallel computing".</h1>
  </Section>
)