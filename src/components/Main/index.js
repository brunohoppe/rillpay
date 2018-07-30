import React from 'react';
import Element from './Element';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Element content={this.props.listoption}/>
    );
  }
}