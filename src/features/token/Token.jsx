import React from 'react'

import './_Token.scss'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { connect } from 'react-redux'
import { getTokens } from 'redux/reducers/token'

class Token extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.getTokens()
    }

    formatTime = (seconds) => {
        const format = val => `0${Math.floor(val)}`.slice(-2)
        const hours = seconds / 3600
        const minutes = (seconds % 3600) / 60
        return [hours, minutes, seconds % 60].map(format).join(':')
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.tokens
        data && data.map(item => {
            const endTime = Date.parse(item.updatedDate) + parseInt(item.period)
            const currentTime = Date.now()
            let distance = parseInt((endTime - currentTime) / 1000)
            if (distance > 0) {
                this.countDown = setInterval(() => {
                    this.setState({
                        [item._id]: --distance
                    })
                }, 1000);
                if (this.state[item._id] && this.state[item._id] === 0) {
                    clearInterval(this.countDown)
                }
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.countDown)
    }
    render() {
        const data = this.props.tokens && this.props.tokens.filter(item => item.user)
        const columns = [
            {
                id: 'user',
                Header: 'User',
                accessor: d => d.user && d.user.username
            },
            {
                Header: 'Token',
                accessor: 'token'
            },
            {
                Header: 'Updated Date',
                accessor: 'updatedDate',
                Cell: prop => {
                    return <span>{prop.original.updatedDate.slice(0, 10)}</span>
                }
            },
            {
                Header: 'Period',
                accessor: 'period'
            },
            {
                Header: 'Duration',
                Cell: prop => {
                    if (this.state[prop.original._id]) {
                        return <span>{this.formatTime(this.state[prop.original._id])}</span>
                    }
                    else return <span style={{ color: 'red' }}>expired</span>
                }
            },
        ]
        return (
            <MasterLayout>
                <div className="container">
                    <div className="token">
                        <h1>Token</h1>
                        <ReactTable
                            data={data}
                            columns={columns}
                            defaultPageSize={10}
                        />
                    </div>
                </div>
            </MasterLayout>
        )
    }
}
const mapStateToProps = (state) => ({
    tokens: state.token.tokens
})

const mapDispatchToProps = {
    getTokens
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Token));
