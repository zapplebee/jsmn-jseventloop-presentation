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
          {`
  const button = document.querySelector('button')

  if (window.Worker) {
    const myWorker = new Worker("/worker.js");
    const send = () => {myWorker.postMessage('payload')}
    button.addEventListener('click', send, false)
    myWorker.onmessage = e => {
      console.log(
        "%c YOU ROLLED A CRITICAL IN " + e.data + " ROLLS!",
        "background: #222; color: #fba000; font-size: 2rem"
      );
    }
  }
          `}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='http://localhost:3000/workerExample.html' target='_blank'>Example</a>
      </Section>
    )
  }
}

export default m07