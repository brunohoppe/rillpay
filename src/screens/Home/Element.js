import React from 'react';
import Menu from '../../components/Menu/index';
import MainContent from '../../components/MainContent/index';
import { View, Text } from 'react-native';
export default class Element extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Menu listoption={this.props.menulist}>
        {/* <View><Text>huauhahuauhahua</Text></View> */}
      </Menu>
    );
  }
}