import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.user}>
                <img src="https://cbs-uu.ru/wp-content/uploads/2021/03/flat-faces-icons-circle-17.png" alt=""/>
                <span>{props.name}</span>
            </div>
            <p>{props.message}</p>
        </div>
    )
};

export default Message;