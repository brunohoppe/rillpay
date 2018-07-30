import React, { Component } from 'react';
import Element from './Element'
export default class Menu extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Element listoption={this.props.listoption}>
        {this.props.children}
      </Element>
    );
  }
}