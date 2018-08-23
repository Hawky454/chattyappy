import React from 'react'

class SendMessageForm extends React.Component {

    constructor() {
        super()
        this.state = {
            message: ''
        }
        //! Could not use this keyword in the handleChange function without binding first
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({
            message: event.target.value
        });
       
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.message);
        this.props.sendMessage(this.state.message)
        //! clean up the input field by setting re-setting state to an empty string
        this.setState({
            message: ''
        });
        if(this.state.message === '') {
            alert('Omg, enter in some freakin\' text before you hit ENTER!');
        }
    }

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input 
                  disabled={this.props.disabled}
                  onChange={this.handleChange}
                  value={this.state.message}
                  placeholder="Type your message and hit ENTER" 
                  type="text" />
            </form>
        );
    }
}

export default SendMessageForm