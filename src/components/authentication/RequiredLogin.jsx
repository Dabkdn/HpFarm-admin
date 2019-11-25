import React from 'react'
export default function RequiredLogin(ComposedComponent) {
    class CheckLogin extends React.Component {
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
        }
    
        render() {
            return (
                <ComposedComponent {...this.props} />
            )
        }
    }
    return CheckLogin
}
