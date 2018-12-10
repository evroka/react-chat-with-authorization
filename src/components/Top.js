import React from 'react';

class HeaderChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: this.props.username };
    }
    shouldComponentUpdate() {
      return true;
    }
    render() {
      return (
        <div className='top-chat p-3 bg-info text-white' >
            <h2>{ this.state.username }</h2>
        </div>
      );
    }
  }

export default HeaderChat;

