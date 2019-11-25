import React from 'react';
import Routers from './routes'

export default class App extends React.Component {
  static displayName = App.name;
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Routers />
    )
  }
}