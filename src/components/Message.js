import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username
        };
    }

    getLogoPath() {
        const pathStart = 'https://filin.mail.ru/letters/default/45x45/';
        const pathEnd = '/1.png';
        let elem = this.props.message.name;
        if(!elem) {
            return 'http://www.seamedu.com/wp-content/uploads/2018/01/dummy-profile-pic.png';
        }
        let str = elem.toUpperCase()[0];
        let n = str.charCodeAt(0);
        //russian alphabet
        if (n >= 1040) {
            n -= 1040;
        }
        //latin alphabet
        else {
         n -= 65;
        }
        n = n % 16;
        let addr = n.toString().padStart(2, "0");
        const resultPath = pathStart + str + '/' + addr + pathEnd;
        return resultPath;
    }

    render() {
        const {message} = this.props;
        const isOutgoing = this.props.message.name === this.state.username;
        return (
            <div className={`media mt-3${isOutgoing ? ' my-message' : ''}`}>
                <div className={`card card-${isOutgoing ? 'right' : 'left'}`}>
                    <p>{message.text}</p>
                    <p className="date-posted">Отправлено: {(new Date(message.id)).toLocaleString("ru")} </p>
                </div>  
                <div className='user-info '>
                    <img src={this.getLogoPath()} alt="ava" className='avatar rounded-circle'/>
                    <p className='user-name' >{message.name}</p>
                </div>          
            </div>
        ); 
    }
}

export default Message;