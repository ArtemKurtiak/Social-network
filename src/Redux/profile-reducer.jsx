import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
let initialState = {
    postsData: [
        {id: 1, message: 'Hi, what\'s your name?', likesCount: 16},
        {id: 2, message: 'Hi', likesCount: 90},
        {id: 3, message: 'I am Artem', likesCount: 0},
        {id: 4, message: 'I am Vlados', likesCount: 0},
        {id: 5, message: 'I am Lukaa', likesCount: 10},
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]

            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        }
        default:
            return state;
    }

}
export const createPost = (newPostText) => {
    return {
        type: ADD_POST,
        newPostText
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USERS_PROFILE,
        profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        postId
    }
}
export const setUserInBody = (userId) => {
    return async (dispatch) => {
        let response = await profileAPI.setUserBodyProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export default profileReducer;