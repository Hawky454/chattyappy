import React from 'react'

class NewRoomForm extends React.Component {

    constructor() {
        super()
        this.state = {
            newRoom: ''
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
                    onClick={() => {(this.state.newRoom === '') ? alert('hey there!') : this.state.newRoom}}  
                    value={this.state.newRoom}
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