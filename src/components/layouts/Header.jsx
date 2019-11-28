import React from "react"
import './_header.scss'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

import { CustomDropDown } from 'components'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    let currentIsOpen = this.state.isOpen
    this.setState({
      isOpen: !currentIsOpen
    })
  }

  componentDidMount() {
  }

  render() {
    return (
      <div id="header" className="Header">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light bg-none">
            <Link to="/" className="navbar-brand">HpFarm</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <CustomDropDown>
                    <div className="avatar">
                      <img src="/assets/images/avatar/default-user.png" alt="" />
                    </div>
                  </CustomDropDown>
                </NavItem>
              </Nav>
            </Collapse>
          </nav>
        </div>
      </div>
    )
  }
}

export default Header