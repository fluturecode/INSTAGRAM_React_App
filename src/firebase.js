import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCp88IcqbFD2l9Mhgd77vOhBhmFJ3m46FA",
	authDomain: "instagram-b444e.firebaseapp.com",
	databaseURL: "https://instagram-b444e.firebaseio.com",
	projectId: "instagram-b444e",
	storageBucket: "instagram-b444e.appspot.com",
	messagingSenderId: "276490958358",
	appId: "1:276490958358:web:39bd408f16cfdbf8c06737",
	measurementId: "G-32YQRVMHSC",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
