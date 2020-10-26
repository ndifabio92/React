import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGRg0OAI1Ai3dz6Hepojxwsuu2PCcpZAA",
    authDomain: "react-app-cursos-dd58b.firebaseapp.com",
    databaseURL: "https://react-app-cursos-dd58b.firebaseio.com",
    projectId: "react-app-cursos-dd58b",
    storageBucket: "react-app-cursos-dd58b.appspot.com",
    messagingSenderId: "516467134066",
    appId: "1:516467134066:web:cea2cc3883a1320a363ceb"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}