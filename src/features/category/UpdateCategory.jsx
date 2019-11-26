import React from 'react'
import { connect } from 'react-redux'
import { CategoryForm } from './sub-view'
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { getCategory } from 'redux/reducers/category'

class UpdateCategory extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const categoryId = this.props.match.params.id
        this.props.getCategory(categoryId)
    }

    render() {
        return (
            <MasterLayout>
                <div className="container" style={{height: "100vh"}}>
                    <CategoryForm type="update" data={this.props.category}/>
                </div>
            </MasterLayout>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.category.category
    }
}

const mapDispatchToProps = {
    getCategory
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateCategory))