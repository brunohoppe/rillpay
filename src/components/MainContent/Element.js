import React from 'react';
import Menu from '../../components/Menu/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, TouchableOpacity } from 'react-native';
export default class Element extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <View>
        <View>
          <TouchableOpacity onPress={this.props.onPress} style={{ paddingLeft: 15}}>
          <Icon name="bars" size={32} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}