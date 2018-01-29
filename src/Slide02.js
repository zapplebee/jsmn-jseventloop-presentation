import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Overview</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>What, How, and Why is the Event Loop?</h1><p>Explore the underlying workings for what makes JS work</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Web APIs and the Event Queue</h1><p>How do Web APIs interact with the main thread</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Optimizing to prevent thread blocking</h1><p>Using Promises, async and other patterns to prevent a full halt for your users</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>MULTI-THREADING!!</h1><p>Use three tools to break out of the single-threaded JavaScript paradigm</p></li>
      </ol>
    </div>
  </Section>
)