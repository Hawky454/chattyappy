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

  constructor() {
    super()
    this.state = {
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: 'davidm',
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenUrl
        })
    })

    //this is a fetch call from the chatkit api
    chatManager.connect() 
    .then(currentUser => {
      this.currentUser = currentUser
        this.currentUser.subscribeToRoom({
            roomId: 14328009,
            hooks: {
                onNewMessage: message => {
                    this.setState({
                      messages: [...this.state.messages, message]
                    })
                }
            }
        })
    })
}

sendMessage(text) {
  this.currentUser.sendMessage({
    text: text,
    roomId: 14328009
  })
}

  
  render() { 
    return (
      <div className="app">
        <RoomList />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendPost={this.sendMessage}/>
        <NewRoomForm />
      </div>
    );
  }
}
 
export default App;
