import React from 'react';

class HeaderChat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: this.props.username };
    }

    scrollToTop() {
      this.props.topRef.scrollIntoView({ behavior: "smooth"});
    }

    componentWillReceiveProps(props) {
      this.setState({username: props.username});
    }

    render() {
      return (
          <div className='top-chat bg-info text-white' >
              <h2>{ this.state.username }</h2>
              <div onClick = {this.scrollToTop.bind(this)} className="navTop" ><span>&uarr;</span></div>
          </div>
    
      );
    }
  }

export default HeaderChat;

