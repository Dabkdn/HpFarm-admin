import React from 'react';
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    document.title = "Hpfarm-Homepage"
  }

  render() {

    return (
        <MasterLayout>
          <div className="container">
            <div className="home" style={{height: "100vh"}}>
              this is Homepage
            </div>
          </div>
        </MasterLayout>
    );
  }
}

export default withRouter(Home);
