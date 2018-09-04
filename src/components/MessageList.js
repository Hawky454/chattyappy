import React from 'react'

class MessageList extends React.Component {
    

    render() { 
        return ( 
            <div className="message-list">
              {this.props.messagesProp.map((data, index) => {
                  return (
                        <section 
                           className="message"
                           key={index}>
                           
                          <div 
                             id="sender-id">
                             {`${data.senderId}`} 
                          </div>
                          <div 
                             id="sender-text">
                             {`${data.text}`}
                          </div>
                        </section>
              )})}
              
            </div>
         );
    }
}
 
export default MessageList;