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
          {`const rollTilCriticalAsyncSetTimeout = callback => {
  const loop = () => {
    if (!runAway) {
      const rollValue = rollFunction();
      if (rollValue < 20) {
        window.setTimeout(loop, 0);
      } else {
        callback(true);
      }
    }
  };
  loop();
};

const rollTilCriticalAsyncSetInterval = callback => {
  let intervalReference;
  const loop = () => {
    if (!runAway) {
      const rollValue = rollFunction();
      if (rollValue < 20) {
        /*do nothing*/
      } else {
        window.clearInterval(intervalReference);
        callback(true);
      }
    }
  };
  intervalReference = window.setInterval(loop, 0);
};

//

rollTilCriticalAsyncSetInterval(console.log)
`}
        </code>
        </div>
        <hr style={{opacity: 0}}/>
        <a href='https://s.codepen.io/zapplebee/debug/xYxozO/yPMJjGDevXbM' target='_blank'>Example</a>
      </Section>
    )
  }
}

export default m07