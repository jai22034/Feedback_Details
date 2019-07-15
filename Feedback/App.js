

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,placeholder} from 'react-native';




export default class App extends Component{
  render() {
    return (
<View style={{flex:1,backgroundColor:'grey'}}>
<View style={{flex:1,marginLeft:18,marginRight:18,marginTop:18,backgroundColor:'white'}}>
<TextInput placeholder="Write here..."/>
</View>
</View>
    );
  }
}

const styles = StyleSheet.create({
 
});
