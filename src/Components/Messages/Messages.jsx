import s from './Messages.module.css';
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";


const Messages = (props) => {
    let dialogsElements = props.dialogsData
        .map(d =>
            <DialogItem name={d.name} id={d.id} key={d.id}/>
        );

    let messagesElements = props.messagesData
        .map(m =>
            <MessageItem value={m.value} key={m.id}/>
        )
    let addNewMessage = (values) => {
        props.creationMessage(values.newMessageBody)
    }
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }
    return (

        <div className={s.my_dialogs}>
            <div className={s.dialog_items}>
                {dialogsElements}
            </div>
            <div className={s.dialogs_messages}>
                {messagesElements} </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    );
}
const maxLength10 = maxLengthCreator(10);
const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' placeholder='Write your message' component={Textarea} type='text'
                   validate={[requiredField, maxLength10]}/>
            <br/>
            <button>Send</button>

        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Messages;