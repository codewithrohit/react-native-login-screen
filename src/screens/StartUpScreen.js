import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { singleScreenApplication } from '../styles/navigatorStyles';

export default class StartUpScreen extends Component { 

  static navigatorStyle = singleScreenApplication;

  componentWillMount(){

    setTimeout(
        () => {
            
            this.props.navigator.push({
                screen: 'CodeWithRohit.LogInScreen',
                title: 'Login Screen'
            });

        },3000
    );

  }  

  render(){

    return (
      <View style={styles.container}>
          <View style={styles.logo}>
              <Image 
                style={{ width: 100,
                          height: 101 }}
                source={require('../images/logo.png')} 
              />
              <Text style={styles.logotext}>
                <Text>CODE WITH</Text>
                <Text style={{ color: '#3e3f8f'}}> ROHIT</Text>
              </Text>
          </View>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  container : {
      flex: 1,
      backgroundColor: '#eeeef1'
  },
  logo: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logotext:{
    color: '#3b363a', 
    fontSize : 24, 
    fontWeight: 'bold'
  }
});