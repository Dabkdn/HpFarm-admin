import React from 'react'
import { connect } from 'react-redux'
import { FaqForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { getFaq } from 'redux/reducers/faq'

class UpdateFaq extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const faqId = this.props.match.params.id
        this.props.getFaq(faqId)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{ height: "100vh" }}>
                    <FaqForm type="update" data={this.props.faq} />
                </div>
            </MasterLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        faq: state.faq.faq
    }
}

const mapDispatchToProps = {
    getFaq
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateFaq))