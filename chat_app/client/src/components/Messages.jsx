import React, { useRef, useEffect, useContext } from 'react';
import Message from './Message';
import MessageContext from "../context/MessageContext"
const MessageList = () => {
    const messageListRef = useRef(null);
    const {messages} = useContext(MessageContext);

    const userDataString = localStorage.getItem('userData');
    const userData = JSON.parse(userDataString);
    console.log(userData)
    console.log("messages: " + messages)
    useEffect(() => {
        // Scroll to the bottom of the message list
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="h-[80%] overflow-y-auto" ref={messageListRef}>
            {
                messages.map((message)=>{
                        return (
                            message.senderId===userData.data.User._id
                            ?<div className="flex justify-end" key={message.id}>
                                <Message message={message}/>
                            </div>
                            :<div className="flex justify-start" key={message.id} >
                                <Message message={message}/>
                            </div>
                        )
                })
            }
        </div>
        );
};

export default MessageList;
