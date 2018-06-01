import React, {Component} from 'react';
import MessageList from './MessageList';
import InputMessage from './Input.js';
import { db } from '../firebase/firebase';

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msgs: [],
            username: this.props.username
        }
    };

    componentDidMount() {
        const messagesRef = db.ref('messages');

        messagesRef.on('value', (snapshot) => {
            const messages = snapshot.val();
            const arr = Object.values(messages);

            this.setState(() => {
                return {msgs: arr};
              });
        });
    }

    sendHandler(message) {
        db.ref(`/messages/${message.id}`).set(message);
    }

    render() {
        return (
            <div>
                <div className="content">
                    <a href="#top" className="navTop"><span>&uarr;</span></a>
                    <div id="top"></div>
                    <MessageList messages={this.state.msgs} username={this.state.username}/>
                    <a href="#down" className="navDown"><span>&darr;</span></a>
                    <div id="down"></div>
                </div>
                <div className="input">
                    <InputMessage username={this.state.username} onSend={this.sendHandler.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Content;
