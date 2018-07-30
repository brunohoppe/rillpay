import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Element extends React.Component {

  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.getContent = this.getContent.bind(this);
  }

  getContent (){
    return <Text>hauuhahuahuahuahuahu</Text>;
  }

  openDrawer () {
    this.refs['myDrawer'].openDrawer();
  }
  render() {
    return (
      <DrawerLayoutAndroid
          ref="myDrawer"
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={ this.getContent }> 
          <View style={styles.drawerco}>
            <View style={styles.drawerch}>
              <TouchableOpacity onPress={this.openDrawer} style={{ paddingLeft: 15}}>
              <Icon name="bars" size={32} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
      </DrawerLayoutAndroid>
    );
  }
}
