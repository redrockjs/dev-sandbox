import React, {useReducer} from "react";
import {appReducer} from "./appReducer";
import {SET_AUTH_USER_DATA, SET_IS_AUTH} from "./types";
import {AppContext} from "./AppContext"

export const AppState = ({children}) => {
    const initialState = {
        isAuth: !!(localStorage.getItem("authData")),
        authUserData:JSON.parse(localStorage.getItem("authData"))
    }

    const [state, dispatch] = useReducer(appReducer, initialState)

    window.state = state

    // Actions
    const setIsAuth  = (payload) => {
        dispatch({type: SET_IS_AUTH, payload})
    }
    const setAuthUserData  = (payload) => {
        dispatch({type: SET_AUTH_USER_DATA, payload})
    }

    return <AppContext.Provider value={{
        setIsAuth,
        setAuthUserData,
        isAuth: state.isAuth,
        authUserData: state.authUserData
    }}>
        {children}
    </AppContext.Provider>
}

