import React from 'react';
import Element from './Element';
export default class MainContent extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <Element onPress={this.props.onPress} />
    );
  }
}