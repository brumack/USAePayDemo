import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Nav = props => {

  const live = props.live ?
    { 'backgroundColor': 'red', 'color': 'white' } :
    { 'backgroundColor': 'white', 'color': 'black' }

  return (
    <Menu>
      <Link to='/'>
        <Menu.Item name='Store'>Store</Menu.Item>
      </Link>
      <Menu.Item style={live} name='Live' onClick={props.handleModeChange}>Live</Menu.Item>
    </Menu >
  )
}

export default Nav
