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
          {`
const d20 = (isLucky) => Math.ceil(Math.random() * 20)
const roll = () => d20(true)
console.log(roll())
  `}
        </code>
        </div>


      </Section>
    )
  }
}

export default m07