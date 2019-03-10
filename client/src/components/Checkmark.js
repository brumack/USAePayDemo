import React from 'react'
import { Icon, Transition, Header } from 'semantic-ui-react'

class Checkmark extends React.Component {

  state = { animation: 'slide up', visible: false }

  componentDidMount() {
    this.toggleVisibility()
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Transition visible={visible} animation='scale' duration={500}>
          <Header as='h2' icon>
            <Icon size='huge' color='green' name='check circle'></Icon>
            Success!
          </Header>
        </Transition>
      </div>
    )
  }
}

export default Checkmark
