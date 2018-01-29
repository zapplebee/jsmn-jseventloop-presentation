import React from 'react'

class Section extends React.Component {
  render() {
    return (
      <section style={this.props.style} className={this.props.className ? `hero is-fullheight ${this.props.className}` : `hero is-fullheight is-light`}>
        <div className="hero-body">
          <div className="container">
           {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}

export default Section
