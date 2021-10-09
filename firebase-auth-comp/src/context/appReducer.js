import {SET_AUTH_USER_DATA, SET_IS_AUTH} from "./types";


const handlers = {
    [SET_IS_AUTH]: (state, {payload}) => ({
        ...state,
        isAuth: payload
    }),
    [SET_AUTH_USER_DATA]: (state, {payload}) => ({
        ...state,
        authUserData: payload
    }),
    DEFAULT: state => state
}

//Context Reducers
export const appReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}