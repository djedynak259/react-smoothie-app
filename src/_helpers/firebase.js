import * as firebaseApp from 'firebase'


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBKggPSed_yrlbxVuZJaQy2xqOeUZy9bt4",
  authDomain: "smoothie-data.firebaseapp.com",
  databaseURL: "https://smoothie-data.firebaseio.com",
  projectId: "smoothie-data",
  storageBucket: "",
  messagingSenderId: "1055076819175"
};

 let firebase = firebaseApp.initializeApp(config)


export {firebase};