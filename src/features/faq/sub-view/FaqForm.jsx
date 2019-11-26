import React from 'react'

import './_FaqForm.scss'
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { addFaq, updateFaq } from 'redux/reducers/faq'
import { withRouter } from 'react-router'


class FaqForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            question: "",
            answer: "",
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
                question: data.question,
                answer: data.answer
            })
        }
    }

    searchString = (str, key) => {
        return str.toLowerCase().search(key)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.type === "add") {
            const faqData = {
                question: this.state.question,
                answer: this.state.answer
            }
            this.props.addFaq(faqData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/faqs')
            }, (error) => {
                toastr.error('Error!', 'something wrong.');
            })
        }
        else {
            const faqData = {
                id: this.state.id,
                question: this.state.question,
                answer: this.state.answer
            }
            this.props.updateFaq(faqData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/faqs')
            }, (err) => {
                toastr.error('Error!', 'Something wrong.');
            })
        }
    }

    onChange = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    render() {
        console.log(this.state)
        return (
            <div className="faq-form">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.props.type === "add" ? <h1><a href="/faqs"><span className="back">&#10154;</span></a> Add Frequently Asked Questions</h1> :
                            <h1><a href="/faqs"><span className="back">&#10154;</span></a> Update Frequently Asked Questions</h1>
                    }
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="question">Question</label>
                            <textarea className="form-control" name="question" id="question" rows="5" required onChange={this.onChange.bind(this, 'question')} value={this.state.question}></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="answer">Answer</label>
                            <textarea className="form-control" name="answer" id="answer" rows="10" required onChange={this.onChange.bind(this, 'answer')} value={this.state.answer}></textarea>
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
    addFaq,
    updateFaq
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FaqForm))