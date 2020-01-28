import React, {useState} from 'react';


//components
import NewFriendForm from './NewFriendForm'
import FriendsList from './FriendsList'

function Dashboard(props) {
    const [friends, setFriends] = useState([])
    return (
        <div>
            <p>Dashboard</p>
            <FriendsList friends={friends} setFriends={setFriends}/>
            <NewFriendForm friends={friends} setFriends={setFriends}/>
        </div>
    );
}

export default Dashboard;