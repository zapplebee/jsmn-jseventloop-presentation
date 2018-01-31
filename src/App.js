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
import Intro03 from './Intro3'
import Intro04 from './Intro04'
import Intro05 from './Intro05'
import Intro06 from './Intro06'
import Intro06a from './Intro06a'
import Intro06b from './Intro06b'
import Intro07 from './Intro07'
import TheStack from './TheStack'
import ThreadBlocking from './ThreadBlocking'
import Callback01 from './Callback02'
import Callback02 from './Callback01'
import Callback03 from './Callback03'
import Callback04 from './Callback04'
import Callback05 from './Callback05'
import Callback06 from './Callback06'
import Audience from './Audience'
import Contrived from './Contrived'
import Contrived2 from './Contrived2'
import Contrived3 from './Contrived3'
import RollSetTimeout from './RollSetTimeout'
import RollSyncRecursive from './RollSyncRecursive'
import RollAnimation from './RollAnimation'
import RollPromise from './RollPromise'
import CanIUse from './CanIUse'
import WhyIs from './WhyIsSingleThreadedGood'
import Candidates from './Canditates'
import Nope from './Nope'
import S1 from './SingleThreaded'
import S2 from './SingleThreaded2'
import EventLoop from './EventLoop'
import SoHow1 from './SoHow'
import SoHow2 from './SoHow2'
import SoHow3 from './WebAPIs'
import Back1 from './BackToReality'
import Back2 from './BackToReality2'
import Thanks from './Thanks'

import 'highlight.js/styles/solarized-dark.css'

const Pages = [
  {route: '/', component: Slide01},
  {route: '/1', component: Slide02},
  {route: '/2', component: Intro02},
  {route: '/3', component: Intro01},
  {route: '/4', component: Intro02a},
  {route: '/5', component: Intro02b},
  {route: '/6', component: Audience},
  {route: '/7', component: WhyIs},
  {route: '/8', component: TheStack},
  {route: '/9', component: Intro03},
  {route: '/10', component: Intro06a},
  {route: '/11', component: Intro06b},
  {route: '/12', component: Audience},
  {route: '/13', component: Intro06b},
  {route: '/14', component: Contrived},
  {route: '/15', component: Contrived2},
  {route: '/16', component: Contrived3},
  // {route: '/intro-04', component: Intro04},
  // {route: '/intro-05', component: Intro05},
  {route: '/17', component: Intro06},
  {route: '/18', component: ThreadBlocking},
  {route: '/19', component: Candidates},
  {route: '/20', component: Intro07},
  {route: '/21', component: Callback01},
  {route: '/22', component: Callback03},
  {route: '/23', component: Callback04},
  {route: '/24', component: Callback02},
  {route: '/25', component: Callback05},
  {route: '/26', component: Callback06},

  {route: '/27', component: Audience},
  {route: '/28', component: Intro06},
  {route: '/29', component: RollSyncRecursive},
  {route: '/30', component: Nope},
  {route: '/31', component: S1},
  // {route: '/callback-06d', component: S2},

  // {route: '/32', component: Callback02},
  {route: '/33', component: EventLoop},
  {route: '/34', component: SoHow1},
  {route: '/35', component: SoHow2},
  {route: '/36', component: Intro02},
  {route: '/37', component: SoHow3},
  {route: '/38', component: RollSetTimeout},
  {route: '/39', component: RollAnimation},
  {route: '/40', component: RollPromise},


  {route: '/41', component: MultiThread01},
  {route: '/42', component: MultiThread02},
  {route: '/43', component: MultiThread03},
  {route: '/44', component: MultiThread04},
  {route: '/45', component: MultiThread04b},
  {route: '/46', component: MultiThread04c},
  {route: '/47', component: MultiThread05},
  {route: '/48', component: MultiThread06},
  {route: '/49', component: MultiThread07},
  {route: '/50', component: GPU01},
  // {route: '/gpu-01a', component: GPU01a},
  {route: '/51', component: GPU02},
  {route: '/52', component: GPU03},
  {route: '/53', component: GPU06},
  {route: '/54', component: GPU07},
  {route: '/55', component: Worker01},
  {route: '/56', component: Worker02},
  {route: '/57', component: Worker03},
  {route: '/58', component: CanIUse},
  {route: '/59', component: Worker04},
  {route: '/60', component: Worker05},
  {route: '/61', component: Back1},
  {route: '/62', component: Back2},
  {route: '/63', component: Thanks},
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
