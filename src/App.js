import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
import './App.css'
import Chatkit from '@pusher/chatkit'
import { tokenUrl, instanceLocator, admin } from './config'

//*note - state is private to each component while props is not, props can be shared between conponents

class App extends React.Component {

constructor() {
  super()
  this.state = {
    messages: []
  }
}

  //! life cycle method called componentDidMount is used to hook up to the chatkit api
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: instanceLocator,
      userId: admin,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    //! this is the actual fetch call that returns a promise
    chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 14328009,
        hooks: {
          onNewMessage: mmmessage => {
            this.setState({
              messages: [...this.state.messages, mmmessage ]
            })
          }
        }
      })
    })
  }

  render() { 
    console.log(this.state)
    return ( 
      <div className="app">
        <RoomList />
        <MessageList messagesProp={this.state.messages}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
     );
  }
}
 
export default App;