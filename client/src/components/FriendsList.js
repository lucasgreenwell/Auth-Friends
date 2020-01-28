import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../tools/axiosWithAuth";

const FriendsList = props => {
  const friends = props.friends;
  const setFriends = props.setFriends
  const [deleteThisFriend, setDeleteThisFriend] = useState({});
  //need to make async call and setFriends to returned data

  useEffect(() => {
    
      axiosWithAuth()
        .get('http://localhost:5000/api/friends', localStorage.getItem('token'))
          .then(res => {setFriends(res.data)})
          .catch(err => {console.log( err)})
  }, [])

  // then map over the friends array and render a component for each friend

  // axios call that gets fired whenever a delete button gets clicked

  useEffect(() => {
      axiosWithAuth().delete(`http://localhost:5000/api/friends/${deleteThisFriend.id}`, localStorage.getItem('token'))
          .then( res => {setFriends(res.data)})
          .catch(err => {console.log(err)})
  }, [deleteThisFriend])

  // return<p>FriendsList</p>

  return friends.map(friend => {
    return (
      <div>
        <p>Name: {friend.name}</p>
        <p>Email: {friend.email}</p>
        <p>Age: {friend.age}</p>
        <button
          onClick={() => {
            setDeleteThisFriend({ ...friend });
          }}
        >
          delete
        </button>
      </div>
    );
  });
};

export default FriendsList;
