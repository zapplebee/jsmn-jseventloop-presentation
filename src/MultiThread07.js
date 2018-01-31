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
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <code className='javascript' style={{whiteSpace: 'pre', display: 'inline-block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1.25rem'}} ref={node => {this.node = node}}>
          {`fetch('https://youraddress.com/a-very-long-process', {
  method: 'POST',
  body: someDataThatNeedsProcessing
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));`}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='https://codepen.io' target='_blank'>Example</a>
      </Section>
    )
  }
}

export default m07