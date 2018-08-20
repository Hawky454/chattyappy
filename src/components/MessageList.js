import React from 'react'
import Message from './Message'




class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {/* we use props here because we added the props to element in App.js while rendering.  this.state was converted to this.props at that point. */}
                {this.props.messages.map((message, index) => {
                    return (
                        <Message key={index} username={message.senderId} text={message.text}/>
                    )
                })}
            </div>
        );
    }
}

export default MessageList