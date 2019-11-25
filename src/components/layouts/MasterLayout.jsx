import React from 'react';
import './_MasterLayout.scss'
import { withRouter } from 'react-router';
import { Footer, Header } from 'components/layouts'
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
        document.getElementById("mySidenav").style.width = "250px";
      }
      else {
        document.getElementById("mySidenav").style.width = "0";
      }
  }

  toggleLeftSide = () => {
      const currentIsLeftSideOpen = this.state.isLeftSideOpen
      this.setState({
        isLeftSideOpen: !currentIsLeftSideOpen
      }, this.handleLeftSideOpen)
  }

  render() {
    return (
      <div>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={this.toggleLeftSide}>&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <button onClick={this.toggleLeftSide}>open</button>
        <div id="main">
          <Header />
          {
            this.props.children
          }
          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(MasterLayout);
