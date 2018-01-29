import React from 'react'
import Section from './Section'
import img from './images/gpujs.png'


class m07 extends React.Component {
  render() {
    return (
      <Section className='is-warning is-bold'>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column'}}>
        <img src={img} style={{maxHeight: '40vh', margin: 'auto'}}/>
          <hr style={{opacity: 0}}/>
          <a href='http://gpu.rocks/' style={{display: 'inline-block', margin: 'auto'}} target='_blank'>http://gpu.rocks</a>
        </div>
      </Section>
    )
  }
}

export default m07