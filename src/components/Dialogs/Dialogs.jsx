import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>);
    let messagesElement = state.messages.map(mess => <Message message={mess.message} key={mess.id}/>);

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElement}
            </div>

            <div className={style.messages}>
                <div>{messagesElement}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );
};

export default Dialogs;