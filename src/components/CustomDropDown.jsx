import React from 'react';

import './_CustomDropDown.scss'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Logout from 'features/logout/index'
import { Link } from 'react-router-dom'

class CustomDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
        this.authenticationInfo = JSON.parse(localStorage.getItem('authenticationInfo'))
    }

    toggle = () => {
        let isOpen = this.state.dropdownOpen
        this.setState({
            dropdownOpen: !isOpen
        })
    }
    render() {
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret={false}>
                    {this.props.children}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>signed in as {this.authenticationInfo && this.authenticationInfo.user && this.authenticationInfo.user.username}</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem><Logout /></DropdownItem>
                </DropdownMenu>
            </Dropdown>
        )
    }
}

export default CustomDropDown;