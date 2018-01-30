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
        <label className='label'>main.js</label>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>

        <code className='javascript' style={{whiteSpace: 'pre', display: 'inline-block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1.25rem'}} ref={node => {this.node = node}}>
          {`if (window.Worker) {
  const myWorker = new Worker("worker.js");
  const send = () => {myWorker.send(payload}
  button.addEventListener('click', send, false)
  myWorker.onmessage = console.log
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