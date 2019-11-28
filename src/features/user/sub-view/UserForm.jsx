import React from 'react'
import './_UserForm.scss'
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { addUser, updateUser } from 'redux/reducers/user'
import { withRouter } from 'react-router'


class UserForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            birthday: '',
            gender: true,
            email: '',
            address: '',
            phone: '',
            username: '',
            password: '',
            confirmPassword: '',
            avatar: '',
            id: ''
        };
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        const data = nextProps.data
        if (data) {
            this.setState({
                id: data._id,
                firstName: data.firstName,
                lastName: data.lastName,
                gender: data.gender,
                birthday: data.birthday && data.birthday.slice(0, 10),
                address: data.address,
                phone: data.phone,
                email: data.email,
                username: data.username
            })
        }
    }

    searchString = (str, key) => {
        return str.toLowerCase().search(key)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.type === "add") {
            const userData = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                birthday: this.state.birthday,
                gender: this.state.gender,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone,
                username: this.state.username,
                password: this.state.password,
                avatar: this.state.avatar
            }
            this.props.addUser(userData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/users')
            }, (error) => {
                const errorMessage = error.response.data.message || error.response.data.errmsg
                if (this.searchString(errorMessage, "duplicate") !== -1 && this.searchString(errorMessage, "username") !== -1) {
                    toastr.error('Error!', 'username already exists');
                }
                if (this.searchString(errorMessage, "duplicate") !== -1 && this.searchString(errorMessage, "phone") !== -1) {
                    toastr.error('Error!', 'phone already exists');
                }
                if (this.searchString(errorMessage, "duplicate") !== -1 && this.searchString(errorMessage, "email") !== -1) {
                    toastr.error('Error!', 'email already exists');
                }
            })
        }
        else {
            const userData = {
                id: this.state.id,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                birthday: this.state.birthday,
                gender: this.state.gender,
                email: this.state.email,
                address: this.state.address,
                phone: this.state.phone
            }
            this.props.updateUser(userData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/users')
            }, (error) => {
                const errorMessage = error.response.data.message || error.response.data.errmsg
                if (this.searchString(errorMessage, "duplicate") !== -1 && this.searchString(errorMessage, "phone") !== -1) {
                    toastr.error('Error!', 'phone already exists');
                }
                if (this.searchString(errorMessage, "duplicate") !== -1 && this.searchString(errorMessage, "email") !== -1) {
                    toastr.error('Error!', 'email already exists');
                }
            })
        }
    }

    handleImageChange = (path) => {
        //image
        this.setState({
            avatar: path
        })
    }

    onChange = (name, e) => {
        this.setState({ [name]: e.target.value })
        if (name === "confirmPassword") {
            if (e.target.value !== this.state.password) {
                document.getElementById('confirm-password').classList.add('wrong-confirm-password')
            }
            else {
                document.getElementById('confirm-password').classList.remove('wrong-confirm-password')
            }
        }
    }

    toggleGender = () => {
        let currentGender = this.state.gender
        this.setState({
            gender: !currentGender
        })
    }

    render() {
        return (
            <div className="user-form">
                <form onSubmit={this.handleSubmit} className="register-form">
                    {
                        this.props.type === "add" ? <h1><a href="/users"><span className="back">&#10154;</span></a> Add User</h1> : 
                        <h1><a href="/users"><span className="back">&#10154;</span></a> Update User</h1>
                    }
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="first-name">First name</label>
                            <input type="text" className="form-control" id="first-name" required onChange={this.onChange.bind(this, 'firstName')} value={this.state.firstName} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="last-name">Last name</label>
                            <input type="text" className="form-control" id="last-name" required onChange={this.onChange.bind(this, 'lastName')} value={this.state.lastName} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="birthday">Birthday</label>
                            <input type="date" className="form-control" id="birthday" onChange={this.onChange.bind(this, 'birthday')} value={this.state.birthday} />
                        </div>
                    </div>
                    <div className="form-row gender">
                        <label className="col-md-4" htmlFor="gender">Gender</label>
                        <div className="form-group col-md-4">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="male" name="gender" checked={this.state.gender} onChange={this.toggleGender} />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                        </div>
                        <div className="form-group col-md-4">
                            <div className="form-check">
                                <input type="radio" className="form-check-input" id="female" name="gender" checked={!this.state.gender} onChange={this.toggleGender} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" id="phone" required onChange={this.onChange.bind(this, 'phone')} value={this.state.phone} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" required onChange={this.onChange.bind(this, 'email')} value={this.state.email} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" id="address" onChange={this.onChange.bind(this, 'address')} value={this.state.address} />
                        </div>
                    </div>
                    {
                        this.props.type === 'add' ? <div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" required onChange={this.onChange.bind(this, 'username')} value={this.state.username} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" required onChange={this.onChange.bind(this, 'password')} value={this.state.password} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" required onChange={this.onChange.bind(this, 'confirmPassword')} value={this.state.confirmPassword} />
                                </div>
                            </div>
                        </div> : <div></div>
                    }
                    <div className="submit">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

const mapDispatchToProps = {
    addUser,
    updateUser
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserForm))