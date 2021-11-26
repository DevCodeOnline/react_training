import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);

    let messageElements = props.state.messages.map(m => <Message name={m.name} message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
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
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button className={s.button} onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;