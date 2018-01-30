import React from 'react'
import Section from './Section'

const codeStyle = {whiteSpace: 'pre', display: 'block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1rem', marginBottom: '0.5rem', userSelect: 'none'}

class m07 extends React.Component {

  constructor(props) {
    super(props)
    this.nodes = []
    this.state = {
      baz: false,
      bar: false,
      foo: false,
      console: true,
      step: 0
    }

    this.cycle = [
      {
        baz: false,
        bar: false,
        foo: false,
        console: true
      },
      {
        baz: false,
        bar: false,
        foo: true,
        console: true
      },
      {
        baz: false,
        bar: true,
        foo: true,
        console: true
      },
      {
        baz: true,
        bar: true,
        foo: true,
        console: true
      },
      {
        baz: false,
        bar: true,
        foo: true,
        console: true
      },
      {
        baz: false,
        bar: false,
        foo: true,
        console: true
      },
      {
        baz: false,
        bar: false,
        foo: false,
        console: true
      },
      {
        baz: false,
        bar: false,
        foo: false,
        console: false
      }
    ]

  }

  componentDidMount() {
    const nodes = this.nodes
    nodes.forEach(e => { window.hljs.highlightBlock(e) })
  }

  render() {

    const advance = () => { this.setState(state => {
      const next = (state.step + 1) % (this.cycle.length)
      return {step: next, ...this.cycle[next]}
    }) }

    return (
      <Section className='is-warning is-bold'>
        <div className='columns' onClick={advance}>
          <div className='column'>
            <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
              {`
const baz = () => 'top of stack'

const bar = () => baz()

const foo = () => bar()

console.log(foo())
              `}
            </code>
          </div>
          <div className='column'>

            <div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', flexDirection: 'column'}}>
              <code className='javascript' style={{...codeStyle, opacity: this.state.baz ? 1 : 0}} ref={node => {this.nodes.push(node)}}>
                {`baz()`}
              </code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.bar ? 1 : 0}} ref={node => {this.nodes.push(node)}}>
                {`bar()`}
              </code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.foo ? 1 : 0}} ref={node => {this.nodes.push(node)}}>
                {`foo()`}
              </code>

              <code className='javascript' style={{...codeStyle, opacity: this.state.console ? 1 : 0}} ref={node => {this.nodes.push(node)}}>
                {`console.log(...)`}
              </code>
            </div>

          </div>
        </div>
      </Section>
    )
  }
}

export default m07