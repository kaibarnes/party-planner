import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDuCUFcdfFkYl0lDtssh11kiHx1sZSl9Cc",
    authDomain: "party-planner-33035.firebaseapp.com",
    databaseURL: "https://party-planner-33035.firebaseio.com",
    projectId: "party-planner-33035",
    storageBucket: "",
    messagingSenderId: "782373637111"
  };
firebase.initializeApp(config);

export default firebase;
