import React from 'react'




class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                //we use props here because we added the props to element in App.js while rendering.  this.state was converted to this.props at that point.
                {this.props.messages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                          <div className="message-username">{message.senderId}</div>
                          <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MessageList