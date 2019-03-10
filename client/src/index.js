import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import Nav from './components/Nav'
import Store from './components/Store'

class App extends React.Component {

  state = {
    live: true
  }

  handleModeChange = () => {
    this.setState({ live: !this.state.live })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav live={this.state.live} handleModeChange={this.handleModeChange} />
          <Route exact path='/'
            render={props => <Store {...props} live={this.state.live} />} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
