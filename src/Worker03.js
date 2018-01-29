import React from 'react'
import Section from './Section'
import img from './images/workerchart.png'
export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1'>Service Workers</h1>
    <h1 className='subtitle is-1' style={{opacity: '0.8'}}>Negatives</h1>
    <div className='content'>
      <ol>
        <li style={{marginBottom: '1.5rem'}}><h1 className='title is-3'>Compatibility</h1></li>
      </ol>
    </div>
    <div style={{display: 'flex', flexDirection:'column'}}>

      <a style={{margin: 'auto', textAlign:'center'}} href='https://caniuse.com/#feat=serviceworkers' target='_blank'>
    <img src={img} style={{maxHeight: '40vh', margin: 'auto'}}/><br/>
        caniuse.com</a>
    </div>
  </Section>
)