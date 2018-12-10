import React, {Component} from 'react';

class InputMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '',
            username: this.props.username
        };
    }

    updateMessage(event) {
        this.setState({ text: event.target.value });
    }

    componentWillReceiveProps(props) {
        this.setState({username: props.username});
      }

    handleSubmit(event) { 
        event.preventDefault();
        if (this.state.text === '') {
            return;
        }
        const msg = {
            'id': Date.now(),
            'name': this.state.username,
            'text': this.state.text
        }
        this.props.onSend(msg);
        this.setState({ text: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)} className='input-form'>
                <div className="input-group ml-4 input-message">
                    <textarea   type="text" 
                                value={this.state.text} 
                                onChange={this.updateMessage.bind(this)} 
                                className="input-message-form form-control mb-3 col-lg-10 " 
                                placeholder="Введите сообщение"/>
                    <span className="input-group-btn">
                        <input type='submit' value='Send' className='btn btn-info ml-3 mt-3 input-btn'/>
                    </span>
                </div>
            </form>
        );
    }
}

export default InputMessage;