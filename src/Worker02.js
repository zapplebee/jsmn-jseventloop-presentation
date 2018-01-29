import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Service Workers</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Positives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Full JavaScript</h1><p>You can do it all. Even network requests</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Local</h1><p>Run it on the local machine. Even if the client is offline</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>True parallelism</h1><p>Doesn't block the main thread</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Cache</h1><p>Store results for future visits</p></li>
      </ol>
    </div>
  </Section>
)