import React from 'react'
import { connect } from 'react-redux'
import { UserForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { getUser } from 'redux/reducers/user'
import { pageTitle } from 'constants/index'

class UpdateUser extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        document.title = pageTitle.updateUser
        const userId = this.props.match.params.id
        this.props.getUser(userId)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container">
                    <UserForm type="update" data={this.props.user} />
                </div>
            </MasterLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user.user
    }
}

const mapDispatchToProps = {
    getUser
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateUser))