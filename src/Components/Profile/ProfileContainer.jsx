import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, setUserInBody, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.setUserInBody(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>)

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})
export default compose(
    connect(mapStateToProps, {
        setUserProfile,
        setUserInBody,
        getStatus,
        updateStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
