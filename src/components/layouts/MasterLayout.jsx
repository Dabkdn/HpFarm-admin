import React from 'react';
import './_MasterLayout.scss'
import { withRouter } from 'react-router';
import { Footer, Header } from 'components/layouts'
import { CustomCollapse } from 'components'
class MasterLayout extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isLeftSideOpen: false
        }
    }

    componentDidMount() {
        this.handleLeftSideOpen()
    }
    handleLeftSideOpen = () => {
        if (this.state.isLeftSideOpen) {
            document.getElementById("mySidenav").style.width = "200px";
        }
        else {
            document.getElementById("mySidenav").style.width = "30px";
        }
    }

    toggleLeftSide = () => {
        const currentIsLeftSideOpen = this.state.isLeftSideOpen
        this.setState({
            isLeftSideOpen: !currentIsLeftSideOpen
        }, this.handleLeftSideOpen)
    }

    handleOnToggle = (value) => {
        this.toggleLeftSide()
    }

    render() {
        const userCollapse = [
            {
                name: "View",
                link: "/users"
            },
            {
                name: "Add",
                link: "/add-user"
            },
        ]
        const faqCollapse = [
            {
                name: "View",
                link: "/faqs"
            },
            {
                name: "Add",
                link: "/add-faq"
            },
        ]
        const categoryCollapse = [
            {
                name: "View",
                link: "/categories"
            },
            {
                name: "Add",
                link: "/add-category"
            },
        ]
        const currencyUnitCollapse = [
            {
                name: "View",
                link: "/currencies"
            },
            {
                name: "Add",
                link: "/add-currency"
            },
        ]
        const tokenCollapse = [
            {
                name: "View",
                link: "/tokens"
            },
        ]
        return (
            <div style={{ marginTop: "56px" }}>
                <div id="mySidenav" className="sidenav">
                    {
                        this.state.isLeftSideOpen ? <a style={{ color: "#ffffff" }} className="closebtn" onClick={this.toggleLeftSide}>&#10094;</a>
                            : <a style={{ color: "#ffffff" }} className="closebtn" onClick={this.toggleLeftSide}>&#10095;</a>
                    }
                    <CustomCollapse name="User" data={userCollapse} />

                    <CustomCollapse name="Category" data={categoryCollapse} />
                    <CustomCollapse name="Currency" data={currencyUnitCollapse} />
                    <CustomCollapse name="FAQ" data={faqCollapse} />

                    <CustomCollapse name="Token" data={tokenCollapse} />
                </div>

                <div id="main">
                    <Header onToggle={this.handleOnToggle} />
                    {
                        this.props.children
                    }

                    <div className="spacer"></div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default withRouter(MasterLayout);
