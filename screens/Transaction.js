import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ImageBackground, Button, TouchableOpacity, Image, LayoutAnimation, Alert } from 'react-native';
import Back_2 from '../assets/back-2.jpg';
import Icon from "react-native-vector-icons/Ionicons";
import moment from 'moment';


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
            dataOfBill: [],
            testData: [],
            data1: [],
            dataOfAccount: [],
            time: ""

        }


    }

    // function connet to firebase and get current user
    async componentDidMount() {
        const { email, displayName, uid, studentId } = firebase.auth().currentUser;
        // get info account throught authentication
        this.setState({ email, displayName, uid, studentId });
        console.log("this is qr code : " + this.state.qr);
        await firebase.firestore().doc(`bills/${this.state.qr}`).get()
            .then((data) => {
                this.setState({
                    dataOfBill: data.data()
                })
            });
        console.log("this is data of bill " + this.state.dataOfBill.soTien);

        // get balance of user
        await firebase.firestore().doc(`accounts/${email}`).get()
            .then((data) => {
                this.setState({
                    dataOfAccount: data.data()
                })
            });
        const tempMSSV = this.state.dataOfAccount.maSv;



        // get all data of student tab
        await firebase.firestore().doc(`students/${tempMSSV}`).get()
            .then((data) => {
                this.setState({
                    data1: data.data()
                })
            });

        const temp = this.state.data1.wallet
        const soDu = temp.soDu
        console.log("this is So Du = " + soDu);
        this.setState({
            testData: soDu
        })
        console.log(this.state.testData - this.state.dataOfBill.soTien);
        if (this.state.testData - this.state.dataOfBill.soTien >= 0) {
            Alert.alert("Bill Id :" + this.state.dataOfBill.maDh, "Your account will be deducted : " + this.state.dataOfBill.soTien)
            firebase.firestore().doc(`students/${tempMSSV}`).update({
                'wallet.soDu': this.state.testData - this.state.dataOfBill.soTien
            })
            //Getting the current date-time with required format and UTC   
            var date = moment()
                .utcOffset('+07:00')
                .format(' hh:mm:ss a');

            this.setState({ time: date });
            //Settign up time to show
            // adding a record on history when transaction is complete
            firebase.firestore().doc(`students/${tempMSSV}/`).update({
                'wallet.history': {
                    'thoiGian': this.state.time,
                    'soTien': this.state.dataOfBill.soTien
                }
            })
            setTimeout(() => {
                this.props.navigation.navigate('Home', { 'tien': this.state.testData - this.state.dataOfBill.soTien })
            }, 3000);
        }
        else {
            Alert.alert("Warning !!!", "Your account not have enough money, plz check again !")
        }




    }

    render() {
        LayoutAnimation.easeInEaseOut();

        return (
            <View style={styles.container}>
                <Button title="Go back" onPress={() => navigation.goBack()} />
                <Text>
                    comming soon !
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

