import {authAPI, usersAPI} from "../api/api";
import {Redirect} from "react-router";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = '/auth/SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}
export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            isAuth,
            userId,
            email,
            login
        }
    }
}
export const setAuthMe = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }

    }
}
export const login = (email, password, rememberMe) => {

    return async (dispatch) => {
        let response = await authAPI.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(setAuthMe())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something went wrong';
            dispatch(stopSubmit('login', {
                _error: message
            }))
        }


    }
}
export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }

    }
}
export default authReducer;
