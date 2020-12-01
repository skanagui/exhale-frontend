import React from 'react'
import { NavLink } from 'react-router-dom';
import {
  Menu
} from "semantic-ui-react";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Menu horizontal>
            <Menu.Item>
              <NavLink to="/"exact>Home</NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="/about"exact>About</NavLink>
            </Menu.Item>,
            <Menu.Item>
              <NavLink to="/login"exact>Login</NavLink>
            </Menu.Item>,
        </Menu>
      </div>
    )
  }
}

export default Navbar;