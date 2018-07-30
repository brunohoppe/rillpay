import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

export default class Element extends Component {
    constructor(props){
      super(props);
    }
    render(){
      return(
        <ScrollView>
          {this.props.data.map((item)=> {
              return <Text key={item}>{ item }</Text>    
          })}
        </ScrollView>
      );
    }
}