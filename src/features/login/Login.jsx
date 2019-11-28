import React from 'react'
import './_Login.scss'

import { toastr } from 'react-redux-toastr';
import { connect } from 'react-redux'
import { Button, Form, Label, Input } from 'reactstrap'
import { login } from 'redux/reducers/authentication'
import { Link } from 'react-router-dom'
import { pageTitle } from 'constants/index'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        document.title = pageTitle.login
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.login(this.state, (error, data) => {
            if (error) {
                console.log(error.response.data.message)
                toastr.error('Error!', 'Please check your info again');
            }
            else {
                console.log(data)
                const role = data.user && data.user.role && data.user.role.name
                if (role !== 'admin') {
                    toastr.error('Error!', 'Please sign in with admin account');
                }
                else {
                    localStorage.setItem('authenticationInfo', JSON.stringify(data))
                    toastr.success('Success!', 'Please wait a moment.');
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                }
            }
        })

    }
    onChange = (name, e) => {
        this.setState({ [name]: e.target.value })
    }
    render() {
        return (
            <div className="login">
                <div className="login__content">

                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <h1>Login</h1>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" name="username" id="username" required onChange={this.onChange.bind(this, 'username')} value={this.state.username} />

                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" id="password" required onChange={this.onChange.bind(this, 'password')} value={this.state.password} />

                        <Button className="btn btn-primary">Submit</Button>
                    </Form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    authentication: state.authentication.tokenInfo
})

const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)