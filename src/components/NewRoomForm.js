import React from 'react'

class NewRoomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            newRoom: ''
        }
        this.validateForm = this.validateForm.bind(this);
    }

    validateForm(event) {
        event.preventDefault();
        console.log(event.target.value);
        if(event.target.value === '') {
            return alert('Please enter a name for a new room')
        }
    }

    render () {
        return (
            <div className="new-room-form">
                <form>
                    <input
                        type="text" 
                        placeholder="NewRoomForm" />
                    <button 
                    onClick={this.validateForm}
                    value=""
                    id="create-room-btn" 
                    type="submit">+<span 
                    role="img" 
                    aria-label="emoji">💬</span></button>
                    
            </form>
        </div>
        );
    }
}

export default NewRoomForm