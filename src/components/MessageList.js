import React from 'react'

const dummyData = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you? You\'re as smooth as Tennessee Whisky'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well, although I am having a hard time figureing out how to set up the css for this text part!!!'
    },
    {
        senderId: 'David Miller',
        text: 'Ya see, this is all just an object and you are now learning how to use Object Oriented Programming.... good job!'
    },
    {
        senderId: 'Davina',
        text: 'Oh mister, you are so funny!'
    },
    {
        senderId: 'David Miller',
        text: 'I know, I know'
    }
]




class MessageList extends React.Component {

    render() { 
        return ( 
            <div className="message-list">
              {dummyData.map((data, index) => {
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