import React from 'react'
import './_CategoryForm.scss'
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { addCategory, getParentCategoryWithChild, updateCategory } from 'redux/reducers/category'
import { Select } from 'components'
import { withRouter } from 'react-router'


class CategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            description: "",
            parentId: "",
            id: '',
            parentCategories: []
        };
    }

    componentDidMount() {
        this.props.getParentCategoryWithChild()
    }

    async componentWillReceiveProps(nextProps) {
        const categories = nextProps.parentCategories.map(item => {
            return {
                "key": item.name,
                "value": item._id
            }
        })

        await categories.unshift({
            "key": "none",
            "value": ""
        })

        this.setState({
            parentCategories: categories
        })

        const data = nextProps.data
        if (data) {
            this.setState({
                id: data._id,
                name: data.name,
                description: data.description,
                parentId: data.parentId
            })
        }
    }

    searchString = (str, key) => {
        return str.toLowerCase().search(key)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.props.type === "add") {
            const categoryData = {
                name: this.state.name,
                description: this.state.description,
                parentId: this.state.parentId === '' ? null : this.state.parentId
            }
            this.props.addCategory(categoryData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/categories')
            }, (error) => {
                toastr.error('Error!', 'something wrong.');
            })
        }
        else {
            const categoryData = {
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                parentId: this.state.parentId === '' ? null : this.state.parentId
            }
            this.props.updateCategory(categoryData, (data) => {
                toastr.success('Success!', 'Please wait a moment!');
                this.props.history.push('/categories')
            }, (err) => {
                toastr.error('Error!', 'Something wrong.');
            })
        }
    }

    onChange = (name, e) => {
        this.setState({ [name]: e.target.value })
    }

    handleCategoryChange = (selected) => {
        this.setState({
            parentId: selected
        })
    }

    render() {
        const categories = this.state.parentCategories
        return (
            <div className="category-form">
                <form onSubmit={this.handleSubmit} className="category-form">
                    {
                        this.props.type === "add" ? <h1><a href="/categories"><span className="back">&#10154;</span></a> Add Category</h1> :
                            <h1><a href="/categories"><span className="back">&#10154;</span></a> Update Category</h1>
                    }
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" required onChange={this.onChange.bind(this, 'name')} value={this.state.name} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="description">Description</label>
                            <input type="text" className="form-control" id="description" required onChange={this.onChange.bind(this, 'description')} value={this.state.description} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="parentId">parent</label>
                            <Select
                                selected={this.state.parentId}
                                data={categories}
                                onSelectChange={this.handleCategoryChange}
                            />
                        </div>
                    </div>
                    <div className="submit">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    category: state.category.category,
    parentCategories: state.category.parentCategories
})

const mapDispatchToProps = {
    addCategory,
    getParentCategoryWithChild,
    updateCategory
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryForm))