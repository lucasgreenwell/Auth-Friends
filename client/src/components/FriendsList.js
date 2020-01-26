import React, {useState, useEffect} from 'react';
import axios from 'axios'

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    //need to make async call and setFriends to returned data


    // useEffect(() => {
    //     axios.get('localhost:5000')
    //         .then(res => {console.log(res)})
    //         .catch(err => {console.log(err)})
    // }, [])


    //then map over the friends array and render a component for each friend
    return (
        // {friends.map( friend => {
        //     return (<div>{friend}</div>)
        // })}
        <div>
            FriendsList component
        </div>
    );
};

export default FriendsList;