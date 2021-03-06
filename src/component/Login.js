/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, Image} from 'react-native';

class Login extends Component{
    constructor () {
        super();
        this.state = {
            email: '',
            password: '',
        };
    }
    
    render() {
        return (
            <View style={styles.container }>
                <Image source={require('../assets/images/bars.png')} style={{width: 100, height: 100, borderRadius: 15}}/>
                <Text style={styles.header}>Login</Text>
                <Text style={styles.header2}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</Text>
                <Text style={styles.txtemail}>E-mail</Text>
                <TextInput style={styles.inputUser} value={this.state.email}/>
                <Text style={styles.txtpass}>Password</Text>
                <TextInput style={styles.inputPass} value={this.state.password} secureTextEntry={true}/>
                <TouchableOpacity style={{borderRadius: 40 , backgroundColor:'#000000', width: 80, height :40, textAlign: 'center', marginTop: 50}}>
                    <Text borderRadius="15px" style={{color: 'white', textAlign: 'center', position: 'relative', top: '25%' }}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        position: 'relative',
        right: 110,
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
        marginTop: 40,
    },
    header2: {
        position: 'relative',
        right: 22,
        textAlign: 'left',
        fontSize: 10,
        color: 'grey',
    },
    txtemail: {
        marginTop: 30,
        position: 'relative',
        right: 100,
    },
    txtpass: {
        marginTop: 10,
        position: 'relative',
        right: 90,
    },
    inputUser: {
        marginTop: 10,
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#D3D3D3',
        color: 'black',
        borderRadius: 30,
    },
    inputPass: {
        marginTop: 10,
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#D3D3D3',
        color: 'black',
        borderRadius: 30,
    },
});

export default Login;
