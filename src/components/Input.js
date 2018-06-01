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
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="input-group ml-4">
                    <textarea   type="text" 
                                value={this.state.text} 
                                onChange={this.updateMessage.bind(this)} 
                                className="form-control mb-3 col-lg-10" 
                                placeholder="Введите сообщение"/>
                    <span className="input-group-btn">
                        <input type='submit' value='Send' className='btn btn-dark ml-3 mt-3'/>
                    </span>
                </div>
            </form>
        );
    }
}

export default InputMessage;