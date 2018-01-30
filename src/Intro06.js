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
            {`
const d20 = (isLucky) => {
  console.log(\`Rolling my \${isLucky ? 'lucky' : 'unlucky'} D20\`)
  if (isLucky) {
    return Math.ceil(Math.random() * 20)
  } else {
    return Math.min(
      ...Array(3).fill(null).map(() => Math.ceil(Math.random() * 20))
    )
  }
}

const roll = (lucky) => {
  console.log('Beginning to roll')
  const value = d20(lucky)
  console.log('Just rolled')
  return value
}

const getACritical = (lucky) => {
  let rollValue
  do {
    rollValue = roll(lucky)
    console.log('got a ', rollValue)
  } while ( rollValue < 20 )
  console.log('%c CRITICAL! ', 'background: #fba000; color: #cc0000; font-size: 2rem')
}
            `}
          </code>
        </div>
        <a href='https://s.codepen.io/zapplebee/debug/xYxozO/mVkbGEQRZpZM' target='_blank'>Codepen</a>
      </Section>
    )
  }
}

export default m07