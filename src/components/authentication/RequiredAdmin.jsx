import React from 'react'
export default function RequiredAdmin(ComposedComponent) {
    class CheckAdmin extends React.Component {
        constructor(props) {
            super(props)
            this.state = {

            }
            this.authenticationInfo = JSON.parse(localStorage.getItem('authenticationInfo'))
        }
        componentDidMount() {

        }

        componentWillMount() {
            if (!this.authenticationInfo) {
                this.props.history.push('/login')
            }
            else {
                const role = this.authenticationInfo.user && this.authenticationInfo.user && this.authenticationInfo.user.role && this.authenticationInfo.user.role.name
                if (role !== "admin") {
                    this.props.history.push('/login')
                }
            }
        }

        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }
    return CheckAdmin
}
