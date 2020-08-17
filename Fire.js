import firebase from 'firebase'

class Fire {
    constructor(){
        var firebaseConfig = {
            apiKey: "AIzaSyBgsye9BlbkjS9KAsROKV9RCVXRqgJSg8Q",
            authDomain: "vanlangwallet.firebaseapp.com",
            databaseURL: "https://vanlangwallet.firebaseio.com",
            projectId: "vanlangwallet",
            storageBucket: "vanlangwallet.appspot.com",
            messagingSenderId: "537777680801",
            appId: "1:537777680801:web:04b0302adf252ddc289be0",
            measurementId: "G-LZ27SF9Y7J"
          };
          // Initialize Firebase
          if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
          }
    }

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get timeStamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;

