import React from 'react'

import './_CurrencyUnitForm.scss'
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { addCurrencyUnit, updateCurrencyUnit } from 'redux/reducers/currencyUnit'
import { withRouter } from 'react-router'


class CurrencyUnitForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unit: "",
            id: ''
        };
    }

    componentDidMount() {
        
    }

    async componentWillReceiveProps(nextProps) {
        const data = nextProps.data
        if (data) {
            this.setState({
                id: data._id,
                unit: data.unit
            })
        }
    }

    searchString = (str, key) => {
        return str.toLowerCase().search(key)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.type === "add") {
            const currencyUnitData = {
                unit: this.state.unit
            }
            this.props.addCurrencyUnit(currencyUnitData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/currencies')
            }, (error) => {
                toastr.error('Error!', 'something wrong.');
            })
        }
        else {
            const currencyUnitData = {
                id: this.state.id,
                unit: this.state.unit
            }
            this.props.updateCurrencyUnit(currencyUnitData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/currencies')
            }, (err) => {
                toastr.error('Error!', 'Something wrong.');
            })
        }
    }

    onChange = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    render() {
        return (
            <div className="currency-unit-form">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.props.type === "add" ? <h1><a href="/currencies"><span className="back">&#10154;</span></a> Add Currency Unit</h1> : 
                        <h1><a href="/currencies"><span className="back">&#10154;</span></a> Update Currency Unit</h1>
                    }
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="unit">Unit</label>
                            <input type="text" className="form-control" id="unit" required onChange={this.onChange.bind(this, 'unit')} value={this.state.unit} />
                        </div>
                    </div>
                    <div className="submit">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    addCurrencyUnit,
    updateCurrencyUnit
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CurrencyUnitForm))