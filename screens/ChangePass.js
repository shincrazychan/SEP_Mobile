import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';

import Back from '../assets/background.jpg';


export default function ChangePass({navigation}) {
    return (

        <View style={styles.container}>
            <ImageBackground source={Back} style={styles.image}>
                <Text style={styles.textDecorOfHeader}>Change Password</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Old password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                ></TextInput>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="New password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                ></TextInput>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Re-password"
                    placeholderTextColor="#fff"
                    autoCapitalize="none"
                ></TextInput>
                <TouchableOpacity
                    style={styles.submitButton}
                >
                    <Text style={styles.submitButtonText} onPress={() => navigation.navigate('Home')}> Save change </Text>
                    
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
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
        width: 150,
        marginLeft: 30,
        borderRadius: 30
    },
    submitButtonText: {
        color: 'white'
    }
});
