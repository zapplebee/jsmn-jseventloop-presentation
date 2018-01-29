import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>XHR Requests (AJAX)</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Positives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>They don't block the main thread</h1><p>The callback pattern with an XHR request allows the rest of your program to run smoothly while making completing this process</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>They use another CPU core</h1><p>It's another core. It's not even on your computer. Leaving local resources free on the user's machine</p></li>
      </ol>
    </div>
  </Section>
)