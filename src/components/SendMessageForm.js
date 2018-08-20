import React from 'react'

class SendMessageForm extends React.Component {

    constructor() {
        super()
        this.state = {
            message: ''
        }
        //could not use this keyword in the handleChange function without binding first
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // when creating a function in a class component you don't have to declare it by calling function first
    handleChange(event) {
        this.setState({
            message: event.target.value
        });
        // console.log('event.target.value', event.target.value) this is the same now as calling this.state.message below because we bound this
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.message);
        this.props.sendPost(this.state.message)
       
    }

    render() {
        return (
            <form 
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input 
                  onChange={this.handleChange}
                  value={this.state.message}
                  placeholder="Type your message and hit ENTER" 
                  type="text" />
            </form>
        );
    }
}

export default SendMessageForm