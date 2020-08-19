import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as firebase from 'firebase';

export default function ScanScreen({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [transactionProps, setTransactionProps] = useState();

   

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    const newData = data.split('-');
    console.log("qr result : "+newData[0]);
    navigation.navigate('Transaction', {hotkey : newData[0]});
    // firebase.firestore().doc(`bills/${newData[0]}`).get().then((data) => {
    //   setTransactionProps(transactionProps.data());
    // });
    // console.log("kokokok"+transactionProps);

    // alert(`Bar code with type ${type}, data 1 : ${newData[0]}`);


    // paying
    // firebase.firestore().doc(`students/T150950`).update({
    //   'wallet.soDu': 45454545
    // })
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
