import {createSelector} from "reselect";

const getUserSelector = (state) => {
    return state.usersPage.usersList;
}
export const getUsersList = createSelector(getUserSelector,(users) => {
    return users
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export const getProgressFetching = (state) => {
    return state.usersPage.isFetching;
}
export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
}