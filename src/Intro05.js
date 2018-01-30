import React from 'react'
import Section from './Section'

const codeStyle = {whiteSpace: 'pre', display: 'block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1rem', marginBottom: '0.5rem'}

class m07 extends React.Component {

  constructor(props) {
    super(props)
    this.nodes = []
  }

  componentDidMount() {
    const nodes = this.nodes
    nodes.forEach(e => { window.hljs.highlightBlock(e) })
  }

  render() {
    return (
      <Section className='is-warning is-bold'>
        <div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
          <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
            {`console.log(
  'Beginning to roll'
)`}
          </code>
        <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
          {`d20(true)`}
        </code>
          <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
            {`console.log(
  \`Rolling my lucky D20\`
)`}
          </code>
          <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
            {`roll()`}
          </code>

          <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
            {`console.log(4)`}
          </code>
        </div>
        <a href='https://s.codepen.io/zapplebee/debug/vdYqEy/LDMmdVQwQmGk' target='_blank'>Codepen</a>
      </Section>
    )
  }
}

export default m07