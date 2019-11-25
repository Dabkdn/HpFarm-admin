import React from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

class CustomCollapse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        const currentIsOpen = this.state.isOpen
        this.setState({
            isOpen: !currentIsOpen
        })
    }
    render() {
        const data = this.props.data
        return (
            <div>
                <a href="javascript:void(0)" onClick={this.toggle}>{this.props.name}</a>
                <Collapse isOpen={this.state.isOpen}>
                    {
                        data && data.map((item, index) => {
                            return (
                                <a key={index} href={item.link} style={{paddingLeft: "40px"}}>{item.name}</a>
                            )
                        })
                    }
                </Collapse>
            </div>
        );
    }
}

export default CustomCollapse;