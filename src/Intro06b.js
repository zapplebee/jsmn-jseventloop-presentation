import React from 'react'
import Section from './Section'

const codeStyle = {whiteSpace: 'pre', display: 'block', margin: 'auto', alignSelf:'center', padding: '2em', fontSize: '1rem', marginBottom: '0.5rem', userSelect: 'none'}

class m07 extends React.Component {

  constructor(props) {
    super(props)
    this.nodes = []
    this.state = {
      step: 0
    }

  }

  componentDidMount() {
    const nodes = this.nodes
    nodes.forEach(e => { window.hljs.highlightBlock(e) })
  }

  render() {

    const advance = () => { this.setState(state => {
      return {step: state.step + 1}
    }) }

    return (
      <Section className='is-warning is-bold'>
        <div className='columns' onClick={advance}>
          <div className='column'>
            <code className='javascript' style={codeStyle} ref={node => {this.nodes.push(node)}}>
              {`
const foo = (counter) => {
  return foo(counter + 1)
}

foo(0)
              `}
            </code>
          </div>
          <div className='column'>

            <div style={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', flexDirection: 'column', transform: 'translate(0, -60%)'}}>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 13 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(13)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 12 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(12)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 11 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(11)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 10 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(10)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 9 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(9)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 8 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(8)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 7 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(7)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 6 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(6)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 5 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(5)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 4 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(4)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 3 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(3)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 2 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(2)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 1 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(1)`}</code>
              <code className='javascript' style={{...codeStyle, opacity: this.state.step >= 0 ? 1 : 0}} ref={node => {this.nodes.push(node)}}>{`foo(0)`}</code>
            </div>

          </div>
        </div>
      </Section>
    )
  }
}

export default m07