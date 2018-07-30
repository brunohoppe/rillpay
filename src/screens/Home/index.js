import React from 'react';
import Element from './Element';
export default class extends React.Component {
  render() {
    return(
      <Element menulist={[1,2,3,4,5]}/>
    );
  }
}