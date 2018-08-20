import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import './App.css';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator } from './config'

//when this gone!!!

class App extends Component {

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'davidm',
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenUrl
        })
    })

    chatManager.connect()
    .then(currentUser => {
        currentUser.subscribeToRoom({
            roomId: 14328009,
            hooks: {
                onNewMessage: message => {
                    console.log('message.text: ', message.text);
                }
            }
        })
    })
}

  
  render() { 
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}
 
export default App;
