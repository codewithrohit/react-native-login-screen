import React, { Component } from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { singleScreenApplication } from '../styles/navigatorStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class LogInScreen extends Component{

    static navigatorStyle = singleScreenApplication;
    
    render(){
        return(

            <View style={styles.container}>
                <View>
                    <Text style={{color: '#fff', fontFamily: 'Lato-Black', fontSize: 22, marginBottom: 10}}>Code With Rohit</Text>
                </View>
                <View style={styles.logincontainer}>
                    <View style={styles.inputbar}>
                        <View style={{height: 30, width: 30, marginTop: 4, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ebebeb'}}>
                            <Icon name="at" size={16} color="#4c4c4c" />
                        </View>
                        <TextInput
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                width: 200,
                                height: 40,
                                paddingTop: 5,
                                paddingLeft: 10,
                                paddingBottom: 5,
                                paddingRight: 10
                            }}
                            placeholder='Your Email Address'
                        />
                    </View>
                    <View style={styles.seprator}></View>
                    <View style={styles.inputbar}>
                        <View style={{height: 30, width: 30, marginTop: 4, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1, borderRightColor: '#ebebeb'}}>
                            <Icon name="lock" size={16} color="#4c4c4c" />
                        </View>    
                        <TextInput 
                            style={{
                                backgroundColor: '#fff',
                                color: '#000',
                                width: 200,
                                height: 40,
                                paddingTop: 5,
                                paddingLeft: 10,
                                paddingBottom: 5,
                                paddingRight: 10
                            }}
                            placeholder='Your Password'
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity>
                        <Text style={{
                            backgroundColor: '#12132b',
                            color: '#fff',
                            fontSize: 16,
                            padding: 5,
                            width: 110,
                            height: 35,
                            textAlign: 'center',
                            marginRight: 20
                        }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{
                            backgroundColor: '#fff',
                            color: '#3e3f8f',
                            fontSize: 16,
                            padding: 5,
                            width: 110,
                            height: 35,
                            textAlign: 'center'
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3e3f8f'
    },
    logincontainer: {
        padding: 5,
        height: 90.8,
        backgroundColor: '#fff',
        marginBottom: 10
    },
    inputbar: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    seprator: {
        borderBottomWidth: 0.8,
        borderBottomColor: '#ebebeb',
        marginBottom: 5,
        marginTop: 5
    }
});