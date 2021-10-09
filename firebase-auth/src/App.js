import React, {useEffect, useState} from "react";
import "./App.css";
import firebase from "firebase/app";
import 'firebase/auth';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.apps.length < 1 && firebase.initializeApp({
    apiKey: "AIzaSyA79U901oy1opJ9hEDuL4O4pHXFMBrMu50",
    authDomain: "iscloudly.firebaseapp.com"
})

const App = () => {

    let [isAuth, setAuth] = useState({isAuth: false})
    let [state, setUserData] = useState({userData:null})
    // let [userData, setUserData] = useState({
    //         uid:"",
    //         displayName: "",
    //         photoURL: ""
    //     })

    window.isAuth = isAuth
    window.state = state

    let uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]}

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setAuth(!!user)
            if (!!user) {
                setUserData( {
                    ...state,
                    userData: user})
            } else {
                setUserData({
                    userData: null
                    // uid: "",
                    // displayName: "",
                    // photoURL: ""
                })
            }
        })
    }, [])

    return (
        <div className="App">
            {!!state.userData
                ? (<div>
                    <img src={state.userData.photoURL} style={{borderRadius: "50px"}} alt=""/>
                    <p> {state.userData.displayName}</p>
                    <p> Signed In! </p>
                    <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
                </div>)
                : (<StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth()}
                />)
            }
        </div>
    );
}

export default App;
