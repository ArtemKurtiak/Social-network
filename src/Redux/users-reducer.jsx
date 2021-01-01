import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
let initialState = {
    usersList: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.userId, 'id', {followed: true} )
                // usersList: state.usersList.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true};
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: updateObjectInArray(state.usersList, action.userId, 'id', {followed: false} )
                // usersList: state.usersList.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: false};
                //     }
                //     return u;
                // })
            }
        case SET_USERS:
            return {
                ...state,
                usersList: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.isFetching ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId),
            }
        default:
            return state;
    }
}
export const follow = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}
export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
export const followUnFollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId));
}
export const wantToFollow = (userId) => {
    return async (dispatch) => {
        followUnFollow(dispatch, userId, usersAPI.follow.bind(usersAPI), follow)
    }
}
export const wantToUnfollow = (userId) => {
    return async (dispatch) => {
        followUnFollow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollow)
    }
}
export default usersReducer;
