import React from 'react'

class NewRoomForm extends React.Component {
    render () {
        return (
            <div className="new-room-form">
                <form>
                    <input
                        type="text" 
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+<span role="img" aria-label="emogi">💬</span></button>
            </form>
        </div>
        )
    }
}

export default NewRoomForm