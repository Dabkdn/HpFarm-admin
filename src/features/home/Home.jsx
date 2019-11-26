import React from 'react';
import { withRouter } from 'react-router';
import { MasterLayout } from 'components/layouts'
import { HomeBanner } from './sub-view'
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
        <HomeBanner />
      </MasterLayout>
    );
  }
}

export default withRouter(Home);
