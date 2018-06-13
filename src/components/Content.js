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

    scrollToBottom() {
        this.bottomRef.scrollIntoView({ behavior: "smooth"});
      }

    componentDidMount() {
        const messagesRef = db.ref('messages');

        messagesRef.on('value', (snapshot) => {
            const messages = snapshot.val();
            const arr = Object.values(messages);

            this.setState(() => {
                return {msgs: arr};
              });
        });

        this.scrollToBottom();

        this.props.updateData(this.topRef);
    }
    
     
    componentWillReceiveProps(props) {
        this.setState({username: props.username});
    }

    sendHandler(message) {
        db.ref(`/messages/${message.id}`).set(message);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="content">
                    <div 
                        ref={(el) => { this.topRef = el }}>
                    </div>
                    <MessageList messages={this.state.msgs} username={this.state.username}/>
                    <div 
                        ref={(el) => { this.bottomRef = el }}>
                    </div>
                </div>
                <div className="input">
                    <div onClick = {this.scrollToBottom.bind(this)} className="navDown"><span>&darr;</span></div>
                    <InputMessage username={this.state.username} onSend={this.sendHandler.bind(this)}/>
                </div>
            </div>
        );
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
      }
}

export default Content;
