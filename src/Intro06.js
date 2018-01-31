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
            {`const rollTilCriticalSync = () => {
  let rollValue;
  do {
    if (runAway) {
      return null;
    } else {
      rollValue = rollFunction();
    }
  } while (rollValue < 20);

  return rollValue;
};`}
          </code>
        </div>
        <a href='https://s.codepen.io/zapplebee/debug/xYxozO/vPAKKVnZvbdA' target='_blank'>Codepen</a>
      </Section>
    )
  }
}

export default m07