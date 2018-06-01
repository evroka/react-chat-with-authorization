import React from 'react';
import Message from './Message';

export default function MessageList({ messages, username }) {
    const messageElements = messages.map(message =>
        <div key = { message.id } ><Message message = { message } username = {username}/></div>
    )
    return (
        <div>
            { messageElements }
        </div>
    )
}