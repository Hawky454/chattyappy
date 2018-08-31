import React from 'react'

class  NewRoomForm extends React.Component {
  
    render() { 
        return ( 
            <div className="new-room-form">
              <form>
                  <input 
                    className="new-room-input"
                    type="text"
                    placeholder="NewRoomForm" />
                    <button   
                      id="create-room-btn"
                      type="submit">Enter</button>
              </form>
            </div>
         );
    }
}
 
export default  NewRoomForm;