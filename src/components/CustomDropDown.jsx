import React from 'react';
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
// import Logout from 'features/logout/index'
import { Link } from 'react-router-dom'

class CustomDropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        let isOpen = this.state.dropdownOpen
        this.setState({
            dropdownOpen: !isOpen
        })
    }
    render() {
        const isHeaderMenu = this.props.isHeaderMenu
        if (isHeaderMenu === true) {
            return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        Menu
            </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>signed in as ABC</DropdownItem>
                        <DropdownItem><Link to="/me">Your Profile</Link></DropdownItem>
                        <DropdownItem><Link to="/my-products">Your Product</Link></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Help</DropdownItem>
                        {/* <DropdownItem><Logout/></DropdownItem> */}
                    </DropdownMenu>
                </Dropdown>
            )
        }
        else return (
            <div>other dropdown</div>
        )
    }
}

export default CustomDropDown;