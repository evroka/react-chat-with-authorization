import React from 'react';

import withAuthorization from './withAuthorization';
import HeaderChat from './Top';
import Content from './Content';
import { db } from '../firebase/firebase';
import { firebase } from '../firebase'; 

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: null
    };
}

componentWillMount() {
    const usersRef = db.ref('users');

    let uid = "";

    firebase.auth.onAuthStateChanged(user => {
      if(user){
        uid = user.uid;
      }
    });

    var prom = usersRef.on('value', (snapshot) => {
      const user = snapshot.val();
      const arr = Object.values(user);
      let name = user[uid].username;
  
      this.setState(() => {
        return {user:name};
      });
   });

  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    
    return (
      <div className='container'>
       <HeaderChat username={this.state.user ? this.state.user : ""}/>
        <Content username={this.state.user ? this.state.user : ""}/>
    </div>
    )
  };
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ChatApp);



/*
return (
  <div className='container'>
  <HeaderChat username={this.state.username} />
  <Content username={this.state.username}/>

    <HeaderChat username={this.state.user ? this.state.user : ""} />
        <Content username={this.state.user ? this.state.user : ""}/>
</div>

componentDidMount() {
  firebase.auth.onAuthStateChanged(user => {
    if(user){
        console.log("logged in");
        console.log(user);
        var usr = firebase.auth.currentUser;
        console.log(usr);
    }
    else{
      console.log("not logged in");
      console.log(user);
    }
  });
}

*/