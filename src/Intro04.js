import React from 'react'
import Section from './Section'

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
        <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
        <code className='javascript' style={{whiteSpace: 'pre', display: 'inline-block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1rem'}} ref={node => {this.nodes.push(node)}}>
          {`
const d20 = (isLucky) => {
  console.log(\`Rolling my \${isLucky} ? 'lucky' : 'unlucky'} D20\`) // 2nd
  return Math.ceil(Math.random() * 20)
}

const roll = () => {
  console.log('Beginning to roll') // 1st
  const value = d20(true)
  console.log('Just rolled') // 3rd
  return value
}

console.log(roll()) //4th
  `}
        </code>
       </div>
        <a href='https://s.codepen.io/zapplebee/debug/vdYqEy/LDMmdVQwQmGk' target='_blank'>Codepen</a>
      </Section>
    )
  }
}

export default m07