import React from 'react';
import {
    Image,
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    TouchableOpacity,
    Alert

} from 'react-native';
import catCry from '../assets/cat.jpg'
import Icon from "react-native-vector-icons/Ionicons";

export default function History({ navigation }) {
    return (
        <TouchableOpacity style={{ marginTop: 10 }}>
            <View style={{ width: 350, height: 100, backgroundColor: '#D7BDE2' }}>
                {/* left icon history */}
                <View style={{ position: "absolute", width: 50, height: 60, top: 20, left: 20 }}>
                    <Icon name='ios-cafe' color='#F7F9F9' size='60' ></Icon>
                </View>
                {/* content of history */}
                <View style={{ position: "absolute", width: 260, height: 50, left: 80, top: 5 }}>
                    <Text style={{ fontSize: 16, marginTop: 5 }} >You have paid an item in VL Tea</Text>
                </View>
                <View style={{ position: "absolute", width: 150, height: 30, right: 10, top: 60 }}>
                    <Text style={{ position: "absolute", fontSize: 13, marginTop: 5, right: 10 }}>26 min ago</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}