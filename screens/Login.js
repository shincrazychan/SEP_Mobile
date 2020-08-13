import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';

import Back from '../assets/background.jpg';
import * as firebase from 'firebase';

export default class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errorMessage: null
    };
    handleLogin = () => {
        const { email, password } = this.state
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({ errorMessage: error.message }))
    };

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={Back} style={styles.image}>

                    {/* error message */}
                    <View style={{
                        alignItems: 'center',
                         marginTop: 60
                    }}>

                        <Text style={{ color: 'red', fontSize: 15 }}>
                            {this.state.errorMessage}
                        </Text>
                    </View>
                    {/*  */}
                    <Text style={styles.textDecorOfHeader}>Đăng nhập</Text>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        autoCapitalize="none"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    ></TextInput>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor="#fff"
                        autoCapitalize="none"
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.submitButton}
                    >
                        <Text style={styles.submitButtonText} onPress={this.handleLogin}> Login </Text>

                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: '#EEF7F6',
        flex: 2,
        backgroundColor: '#06AD9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDecorOfHeader: {
        color: '#EEF7F6',
        textTransform: 'uppercase',
        fontSize: 30,
        borderColor: '#fff',
        textAlign: 'center',
        marginTop: 100,
    },
    textDecorOfLabel: {

    },
    input: {
        color: '#fff',
        margin: 15,
        paddingLeft: 10,
        height: 40,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20
    },
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',

    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
        width: 80,
        marginLeft: 30,
        borderRadius: 30
    },
    submitButtonText: {
        color: 'white'
    }
});
