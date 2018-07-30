import React from 'react';
import { Text, DrawerLayoutAndroid } from 'react-native';
import MainContent from '../MainContent/index';
export default class Element extends React.Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }
  openDrawer () {
    this.refs['myDrawer'].openDrawer();
  }
  getOptions (){
    return this.props.listoption.map(item => <Text key={item}>{item}</Text>);
  }
  render() {
    return(
      <DrawerLayoutAndroid
          ref="myDrawer"
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={ this.getOptions }>
          <MainContent onPress={this.openDrawer} />
          {this.props.children}
      </DrawerLayoutAndroid>
    );
  }

}