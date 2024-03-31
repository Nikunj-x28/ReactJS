import React, { useRef, useEffect } from 'react';
import Message from './Message';

const MessageList = () => {
    const messageListRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom of the message list
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }
    }, []);

    return (
        <div className="h-[80%] overflow-y-auto" ref={messageListRef}>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default MessageList;
