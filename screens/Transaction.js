import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity, Image, LayoutAnimation } from 'react-native';
import Back_2 from '../assets/back-2.jpg';
import Icon from "react-native-vector-icons/Ionicons";

import * as firebase from 'firebase';



export default class Transaction extends React.Component {
    // pm
    constructor(props) {
        super();
        this.state = {
            email: "",
            displayName: "",
            uid: "",
            qr: props.route.params.hotkey,
            dataOfBill: []
        }


    }

    // function connet to firebase and get current user
    async componentDidMount() {
        const { email, displayName, uid, studentId } = firebase.auth().currentUser;
        // get info account throught authentication
        this.setState({ email, displayName, uid, studentId });
        console.log("this is qr code : "+ this.state.qr);



        // get all data of student tab
        // console.log("qr code : "+this.state.qr);
        await firebase.firestore().doc(`bills/${this.state.qr}`).get()
            .then((data) => {
                this.setState({
                    dataOfBill: data.data()
                })
            });
        console.log("this is data of bill "+this.state.dataOfBill.soTien);

    }
    // logout
    logOutUser() {
        firebase.auth().signOut();
    }



    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Text>
                When paying this bill, your account will be deducted {this.state.dataOfBill.soTien} vnd
                </Text>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    image: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',

    },
    search: {
        position: 'absolute',
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 200,
        borderRadius: 10,

    },
    topBar: {
        backgroundColor: '#E5E8E8',
        height: 80,

    },
    topBarButton: {
        color: '#fff',
        position: 'absolute',
        right: 10,
        top: 15
    },
    middleBar: {
        top: 100,
        width: '95%',
        height: '15%',
        marginLeft: '2.5%',
        paddingLeft: 30,
        backgroundColor: 'gray',
        opacity: 0.6,
        position: 'absolute',
    },
    accountBalance: {
        top: 120
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },

});

