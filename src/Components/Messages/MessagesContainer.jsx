import React from "react";
import {
    creationMessage,
} from "../../Redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData,
        newMessageText: state.messagesPage.newMessageText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        creationMessage: (newMessageBody) => {
            dispatch(creationMessage(newMessageBody))
        },
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages);