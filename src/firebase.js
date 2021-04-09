import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCwlAVT7H8vV1gft4mYwYd26BcJYVnMm6I",
    authDomain: "localeats-d30ae.firebaseapp.com",
    projectId: "localeats-d30ae",
    storageBucket: "localeats-d30ae.appspot.com",
    messagingSenderId: "872214656358",
    appId: "1:872214656358:web:15e15064fb03ba641644a7",
    measurementId: "G-125QBD2W9S"
})

export const auth = app.auth()
export default app