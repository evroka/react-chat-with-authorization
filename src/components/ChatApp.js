import React from 'react';

import withAuthorization from './withAuthorization';
import HeaderChat from './HeaderChat';
import Content from './Content';
import { db } from '../firebase/firebase';
import {firebase } from '../firebase'; 

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: null
    };
}

componentDidMount() {
    const usersRef = db.ref('users');

    let uid = "";

    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser){
        uid = authUser.uid;
      }
      usersRef.on('value', (snapshot) => {
        const usr = snapshot.val();
        console.log(usr, uid);
        let name = usr[uid].username;
    
        this.setState(
          {user:name}
        );
     });
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  updateData = (value) => {
    this.setState({ topRef: value })
  }

  render() {
    return (
      <div className='container'>
       <HeaderChat username={this.state.user} topRef={this.state.topRef} />
       <Content username={this.state.user} updateData={this.updateData}/>
    </div>
    )
  };
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ChatApp);