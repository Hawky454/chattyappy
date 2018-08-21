import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit'
import './App.css';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import { tokenUrl, instanceLocator, admin } from './config'







class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
        instanceLocator,
        userId: admin,
        tokenProvider: new Chatkit.TokenProvider({
            url: tokenUrl
        })
    })

    //this is a fetch call from the chatkit api
    chatManager.connect() 
    .then(currentUser => {    //returns a promise
      this.currentUser = currentUser 


      this.currentUser.getJoinableRooms() //returns a promise
      .then(joinableRooms => { //add the rooms to the state
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))

        this.currentUser.subscribeToRoom({
            roomId: 14328009,
            hooks: {
                //message is the data we're receiveing... I map through it in MessageList.js
                onNewMessage: message => {
                    this.setState({ //... (spread opererator)inplace of setting up an array ES6, we do this to maintain the state of the original array instead of using the push method: message.push()
                      messages: [...this.state.messages, message]
                    })
                }
            }
        })
    })
    .catch(err => console.log('error on connecting: ', err))
}
  //this function is sending data to ChatKit : put this down below as a prop in <SendMessageForm />
sendMessage(text) {
  this.currentUser.sendMessage({
    text: text,
    roomId: 14328009
  });
}

  
  render() { 
    return (
      <div className="app"> 
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage} /> {/*added above function as prop so it can be used in SendMessageForm.js*/}
        <NewRoomForm />
      </div>
    );
  }
}
 
export default App;
