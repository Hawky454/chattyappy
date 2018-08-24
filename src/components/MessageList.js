import React from 'react'
import Message from './Message'
import TestFun from './TestComponent'
import ReactDOM from 'react-dom'




class MessageList extends React.Component {

    //!This allows user to read posts higher up in the chatroom without the post shooting back to the bottom whenever a new poster posts...
    componentWillUpdate() {
        let node = ReactDOM.findDOMNode(this)
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
    }

    //!This will scroll page down to latest post (depending on where the user is)
    componentDidUpdate() {
        if (this.shouldScrollToBottom) {
            let node = ReactDOM.findDOMNode(this)
            node.scrollTop = node.scrollHeight
        }
    }
    
    render() {
        if(!this.props.roomId) {
            return (
                <div className="message-list">
                    <div className="join-room">
                     Join a room! &rarr;
                    </div>
                </div>
            )
        }
        return (
            <div className="message-list">
                {/* we use props here because we added the props to element in App.js while rendering.  this.state was converted to this.props at that point. */}
                {this.props.messages.map((message, index) => {
                    return (
                        <Message 
                        key={index} //added index for unique key
                        username={message.senderId} 
                        text={message.text}/>
                    )

                })}
            </div>
        );
    }
}

export default MessageList