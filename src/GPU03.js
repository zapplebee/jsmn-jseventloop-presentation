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
        <code className='javascript' style={{whiteSpace: 'pre', display: 'inline-block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1rem'}} ref={node => {this.node = node}}>
          {`const gpu = new GPU();
const multiplyMatrix = gpu.createKernel(function(a, b) {
  var sum = 0;
  for (var i = 0; i < 512; i++) {
    sum += a[this.thread.y][i] * b[i][this.thread.x];
  }
  return sum;
})
  .setOutput([512, 512])
  .setOutputToTexture(true);

const c = multiplyMatrix(a, b);`}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='https://codepen.io' target='_blank'>Example</a>
      </Section>
    )
  }
}

export default m07