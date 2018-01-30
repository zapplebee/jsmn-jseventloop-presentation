import React, { Component, Fragment } from 'react';
import { Switch, Route, BrowserRouter, withRouter } from 'react-router-dom'
import Slide01 from './Slide01'
import Slide02 from './Slide02'
import MultiThread01 from './MultiThread01'
import MultiThread02 from './MultiThread02'
import MultiThread03 from './MultiThread03'
import MultiThread04 from './MultiThread04'
import MultiThread04b from './MultiThread04b'
import MultiThread04c from './MultiThread04c'
import MultiThread05 from './MultiThread05'
import MultiThread06 from './MultiThread06'
import MultiThread07 from './MultiThread07'
import GPU01 from './GPU01'
import GPU01a from './GPU01a'
import GPU02 from './GPU02'
import GPU03 from './GPU03'
import GPU06 from './GPU06'
import GPU07 from './GPU07'
import Worker01 from './Worker01.js'
import Worker02 from './Worker02.js'
import Worker03 from './Worker03.js'
import Worker04 from './Worker04.js'
import Worker05 from './Worker05.js'
import Intro01 from './Intro01'
import Intro02 from './Intro02'
import Intro02a from './Intro02a'
import Intro02b from './Intro02b'
import Intro03 from './Intro03'
import Intro04 from './Intro04'
import Intro05 from './Intro05'
import Intro06 from './Intro06'
import Intro06a from './Intro06a'
import Intro06b from './Intro06b'
import Intro07 from './Intro07'
import 'highlight.js/styles/solarized-dark.css'

const Pages = [
  {route: '/', component: Slide01},
  {route: '/1', component: Slide02},
  {route: '/intro-01', component: Intro01},
  {route: '/intro-02', component: Intro02},
  {route: '/intro-02a', component: Intro02a},
  {route: '/intro-02b', component: Intro02b},
  // {route: '/intro-03', component: Intro03},
  {route: '/intro-04', component: Intro04},
  {route: '/intro-05', component: Intro05},
  {route: '/intro-06', component: Intro06},
  {route: '/intro-06a', component: Intro06a},
  {route: '/intro-06b', component: Intro06b},
  {route: '/intro-07', component: Intro07},
  {route: '/multithread-01', component: MultiThread01},
  {route: '/multithread-02', component: MultiThread02},
  {route: '/multithread-03', component: MultiThread03},
  {route: '/multithread-04', component: MultiThread04},
  {route: '/multithread-05', component: MultiThread04b},
  {route: '/multithread-06', component: MultiThread04c},
  {route: '/multithread-07', component: MultiThread05},
  {route: '/multithread-08', component: MultiThread06},
  {route: '/multithread-09', component: MultiThread07},
  {route: '/gpu-01', component: GPU01},
  {route: '/gpu-01a', component: GPU01a},
  {route: '/gpu-02', component: GPU02},
  {route: '/gpu-03', component: GPU03},
  {route: '/gpu-04', component: GPU06},
  {route: '/gpu-05', component: GPU07},
  {route: '/worker-01', component: Worker01},
  {route: '/worker-02', component: Worker02},
  {route: '/worker-03', component: Worker03},
  {route: '/worker-04', component: Worker04},
  {route: '/worker-05', component: Worker05},
  ]

class Clicker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentIndex: Pages.map(e => e.route).indexOf(props.location.pathname)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const currentIndex = Pages.map(e => e.route).indexOf(this.props.location.pathname)
      this.setState({currentIndex})
    }
  }

  onKeyDown = e => {
    const currentIndex = Pages.map(e => e.route).indexOf(this.props.location.pathname)
    const nextIndex = ((currentIndex + 1) % (Pages.length))
    const prevIndex = currentIndex === 0 ? Pages.length - 1 : Math.max(0, currentIndex - 1)

    if (e.code === 'ArrowRight') {this.props.history.push(Pages[nextIndex].route)}
    if (e.code === 'ArrowLeft') {this.props.history.push(Pages[prevIndex].route)}
    if (e.code === 'ArrowUp') {this.props.history.push(Pages[0].route)}
    if (e.code === 'ArrowDown') {this.props.history.push(Pages[Pages.length - 1].route)}

  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown.bind(this), false)
  }

  render() {
    return (
      <div style={{
        position: 'fixed',
        right: '1rem',
        bottom: '1rem',
        height: '2rem',
        width: '5rem',
        backgroundColor: 'rgba(0,0,0,0.7',
        display: 'flex',
        alignItems: 'center',
        padding: '0rem 0.5rem',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}>
        <span style={{color: 'white'}} onClick={this.onKeyDown.bind(this, {code: 'ArrowLeft'})}>◀</span>
        <span style={{color: 'white'}}>{this.state.currentIndex}</span>
        <span style={{color: 'white'}} onClick={this.onKeyDown.bind(this, {code: 'ArrowRight'})}>▶</span>
      </div>
    )
  }
}


class Whiteboard extends Component {

  render() {
    return (
      <div style={{
        position: 'fixed',
        right: '1rem',
        bottom: '3.5rem',
        height: '2rem',
        width: '5rem',
        backgroundColor: 'rgba(0,0,0,0.7',
        display: 'flex',
        alignItems: 'center',
        padding: '0rem 0.5rem',
        justifyContent: 'space-between',
        userSelect: 'none'
      }}>
        <a style={{color: 'white', textAlign: 'center', width: '100%'}} href='https://codepen.io/zapplebee/full/oEgoZx/' target='_blank'>Draw</a>
      </div>
    )
  }
}

const ConnectedClicker = withRouter(Clicker)

const App = () => (
    <BrowserRouter>
      <Fragment>
        <Switch>
          {Pages.map((e, i) => <Route exact key={i} path={e.route} component={e.component}/>)}
        </Switch>
        <Whiteboard/>
        <ConnectedClicker/>
      </Fragment>
    </BrowserRouter>
)

export default App;
