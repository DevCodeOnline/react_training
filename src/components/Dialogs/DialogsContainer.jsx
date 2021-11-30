import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                };

                let onNewMessageChange = (body) => {
                    let action = updateNewMessageBodyCreator(body);
                    store.dispatch(action);
                };

                return (
                    <Dialogs
                        dialogsPage={state}
                        sendMessage={onSendMessageClick}
                        updateNewMessageBody={onNewMessageChange}
                    />
                )
            }
        }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;