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
      <div>
        <MasterLayout>
          <div>this is Homepage</div>
        </MasterLayout>
      </div>
    );
  }
}

export default withRouter(Home);
