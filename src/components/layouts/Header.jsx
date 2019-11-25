import React from "react"
import './_header.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link } from 'react-router-dom'
import CustomDropDown from '../CustomDropDown'


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
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/products">Products</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/shipment">Shipment</NavLink>
                </NavItem>
                <NavItem>
                  <CustomDropDown isHeaderMenu={true} />
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