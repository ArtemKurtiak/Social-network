import React from 'react';
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow, wantToFollow, wantToUnfollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
    getCurrentPage,
    getFollowingProgress,
    getPageSize,
    getProgressFetching,
    getTotalUsersCount, getUsersList
} from "../../Redux/users-selectors";

class usersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                usersList={this.props.usersList}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollowUser={this.props.unfollow}
                followUser={this.props.follow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingProgress={this.props.followingProgress}
                wantToFollow={this.props.wantToFollow}
                wantToUnfollow={this.props.wantToUnfollow}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: getUsersList(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getProgressFetching(state),
        followingProgress: getFollowingProgress(state),
    }
}
export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    wantToFollow,
    wantToUnfollow
})(usersContainer)
