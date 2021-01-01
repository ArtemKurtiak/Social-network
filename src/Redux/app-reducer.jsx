import {authAPI, usersAPI} from "../api/api";
import {Redirect} from "react-router";
import {stopSubmit} from "redux-form";
import {setAuthMe} from "./auth-reducer";

const INITIALIZED_SUCCESS = '/auth/INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }

        default:
            return state
    }
}
export const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthMe())
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        }
    )

    }
}

export default appReducer;
