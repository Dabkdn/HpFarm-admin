import React from 'react'

export default class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedValue: (this.props.data[0] && this.props.data[0].value) || "" 
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selected) {
            this.setState({
                selectedValue: nextProps.selected
            })
        }
    }

    handleSelect = (event) => {
        this.setState({
            selectedValue: event.target.value
        })
        this.props.onSelectChange(event.target.value)
    }

    render() {
        const data = this.props.data
        return (
            <select className="select form-control" value={this.state.selectedValue} onChange={this.handleSelect}>
                {
                    data && data.map(item => {
                        return (
                        <option key={item.key} value={item.value}>{item.key}</option>
                        )
                    })
                }
            </select>
        )
    }
}