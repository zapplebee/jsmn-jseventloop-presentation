import React from 'react'
import Section from './Section'
import png from './images/js.png'

export default (props) => (
  <Section className='is-warning is-bold'>
    <h1 className='title is-1' style={{margin: 0}}>Exploring the JavaScript</h1>
    <h1 className='title is-1'>Event Loop</h1>
    <h2 className='subtitle is-4' style={{color: '#555'}}>Zachary Skalko | <a href='https://twitter.com/zapplebee'><span className="icon has-text-info">
  <i className="fa fa-twitter"></i>
    </span><span style={{marginLeft: '0'}}>@zapplebee</span></a></h2>

    <img src={png} style={{position: 'absolute', right: '3rem', top: '3rem', height: '40vmin', height: '40vmin', boxShadow: '5px 5px 5px black'}}/>
  </Section>
)