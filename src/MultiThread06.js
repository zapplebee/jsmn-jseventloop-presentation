import React from 'react'
import Section from './Section'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>XHR Requests (AJAX)</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Drawbacks</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Network dependent</h1><p>If the data to be processed is large (for instance image processing), it may not be feasible to upload the entire data set</p></li>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>It doesn't scale</h1><p>It's not distributed. Doesn't leverage the client's computing power.</p></li>
      </ol>
    </div>
  </Section>
)