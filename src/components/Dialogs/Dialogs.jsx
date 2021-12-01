import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>);
    let messageElements = state.messages.map(m => <Message name={m.name} message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messageElements}
                </div>
                <div className={s.form}>
                    <div>
                        <textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea>
                    </div>
                    <div>
                        <button className={s.button} onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;