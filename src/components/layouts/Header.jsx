import React from "react"
import './_header.scss'
import { Link } from 'react-router-dom'


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
            
          </nav>
        </div>
      </div>
    )
  }
}

export default Header