import React from 'react'

class NewRoomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            newRoomName: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(event) {
        this.setState({
            newRoomName: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.createRoom(this.state.newRoomName)

        this.setState({
            newRoomName: ''
          })
          if(this.state.newRoomName === '') {
              alert('Please enter the name of a room before submitting')
          }
    }



    render () {
        return (
            <div className="new-room-form">
                <form 
                  onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.newRoomName}
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="New Room:" 
                        />
                    <button 
                      id="create-room-btn" 
                      type="submit">+<span 
                      role="img" 
                      aria-label="emoji">💬</span>
                     </button>
                    
            </form>
        </div>
        );
    }
}

export default NewRoomForm