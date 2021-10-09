import React, {useContext, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import firebase from "firebase/app";
import "firebase/auth"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {AppContext} from "../context/AppContext";
import {useAuthState} from 'react-firebase-hooks/auth';

if (firebase.apps.length < 1) {
    firebase.initializeApp({
        apiKey: "AIzaSyA79U901oy1opJ9hEDuL4O4pHXFMBrMu50",
        authDomain: "iscloudly.firebaseapp.com"
    })
}

// pretty view container
const LoginWrapper = ({children}) => {
    return <Container>
        <Row>
            <Col>
                <div style={{"padding": "20px 0px 0px 20px"}}>
                    {children}
                </div>
            </Col>
        </Row>
    </Container>
}

export let Login = () => {

    const [user, loading, error] = useAuthState(firebase.auth());

    const {setIsAuth, setAuthUserData} = useContext(AppContext)

    let uiConfig = {
        signInSuccessUrl: '/login',
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
    }

    const logout = () => {
        firebase.auth().signOut()
    }

    useEffect( ()=> {
        if (user) {
            setIsAuth(true)
            setAuthUserData(user)
            localStorage.setItem("authData",JSON.stringify(user))
        } else {
            setIsAuth(false)
            setAuthUserData(null)
            localStorage.removeItem("authData")
        }
    },[user])

    if (loading) {
        return <LoginWrapper>
            <p>Initialising User...</p>
        </LoginWrapper>
    }

    if (error) {
        return <LoginWrapper>
            <p>Error: {error}</p>
        </LoginWrapper>
    }

    if (user) {
        return <LoginWrapper>
            <span style={{"textAlign": "center"}}>
                        <p> Signed In! </p>
                        <p><img src={user.photoURL} style={{"borderRadius": "50px"}} alt=""
                                title={user.displayName}/></p>
                        <p>{user.displayName}</p>
                        <p>{user.email}</p>
                        <p><button onClick={logout}>Sign Out </button></p>
            </span>
        </LoginWrapper>
    }

    return <LoginWrapper>
        <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
        />
    </LoginWrapper>
}

