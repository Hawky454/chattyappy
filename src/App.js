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
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
    this.createRoom = this.createRoom.bind(this)
  }
  
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: admin,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    //this is a fetch call to the chatkit api
    chatManager.connect()
      .then(currentUser => { //returns a promise
        this.currentUser = currentUser
        this.getRooms();


      })

      .catch(err => console.log('error on connecting: ', err))

  }
  
  getRooms() {
    this.currentUser.getJoinableRooms() //returns a promise
      .then(joinableRooms => { //add the rooms to the state
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinableRooms: ', err))
  }

  subscribeToRoom(roomId) {
    // need to clean up the state...
    this.setState({
      messages: [] 
    })
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
          onNewMessage: message => {
              this.setState({ 
                messages: [...this.state.messages, message]
              })
          }
      }
  })
  .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => console.log('error on subscribing to room: ', err))
  }



  //!this function is sending data to ChatKit : put this down below as a prop in <SendMessageForm />
sendMessage(text) {
  this.currentUser.sendMessage({
    text: text,
    roomId: this.state.roomId
  });
}



createRoom(newRoomName) {
  console.log('newRoomName: ', newRoomName)
  this.currentUser.createRoom({
    name: newRoomName
  })
  .then(room => this.subscribeToRoom(room.id))
  .catch(err => console.log('error with createRoom: ', err))
}
  
  
  render() { 
    return (
      <div className="app"> 
        <RoomList 
          roomId={this.state.roomId}
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}/>
        <MessageList 
          roomId={this.state.roomId}
          messages={this.state.messages}/>
        <SendMessageForm 
          disabled={!this.state.roomId}
          sendMessage={this.sendMessage} /> {/*added above function as prop so it can be used in SendMessageForm.js*/}
        <NewRoomForm createRoom={this.createRoom}/>
      </div>
    );
  }
}
 
export default App;
