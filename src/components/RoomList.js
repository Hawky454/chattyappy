import React from 'react'


class RoomList extends React.Component {
    render () {
        let orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id)
        return (
            <div className="rooms-list">
              <ul>
              <h3>Your rooms:</h3> 
                 {orderedRooms.map(rooms => {
                     let active = this.props.roomId === rooms.id ? 'active' : '';
                  return (
                      <li className={"room " + active} key={rooms.id}>
                          {/* using an anonymous function to be invoked when onClick is triggered */}
                           <a onClick={()=> {this.props.subscribeToRoom(rooms.id)}}
                           href="#">* {rooms.name}</a>
                          {/*I really want to post rooms.name at the top of MessageList so I know what chatroom I'm in*/}
                      </li>
                    );
                 })}
              </ul>
            </div>
        )
    } 
}


export default RoomList