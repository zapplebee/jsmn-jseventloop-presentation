import React from 'react'
import Section from './Section'

class m07 extends React.Component {

  constructor(props) {
    super(props)
    this.node = null
  }

  componentDidMount() {
    const node = this.node
    window.hljs.highlightBlock(node)
  }

  render() {
    return (
      <Section className='is-warning is-bold'>
        <label className='label'>worker.js</label>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

        <code className='javascript' style={{whiteSpace: 'pre', display: 'inline-block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1.25rem'}} ref={node => {this.node = node}}>
          {`onmessage = e => {
  console.log('Message received from main script');
  const workerResult = someLongProcess(e.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}`}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='http://mdn.github.io/simple-web-worker/' target='_blank'>MDN Example</a>
      </Section>
    )
  }
}

export default m07