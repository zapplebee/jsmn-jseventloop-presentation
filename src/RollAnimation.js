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
          {`const rollTilCriticalAsyncAnimationFrame = callback => {
  const loop = () => {
    if (!runAway) {
      const rollValue = rollFunction();
      if (rollValue < 20) {
        window.requestAnimationFrame(loop);
      } else {
        callback(true);
      }
    }
  };
  loop();
};`}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='https://s.codepen.io/zapplebee/debug/xYxozO/yPMJjGDevXbM' target='_blank'>Example</a>
      </Section>
    )
  }
}

export default m07