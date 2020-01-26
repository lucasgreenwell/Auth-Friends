import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [deleteThisFriend, setDeleteThisFriend] = useState({});
  //need to make async call and setFriends to returned data

  // useEffect(() => {
  //     axios.get('localhost:5000')
  //         .then(res => {console.log(res)})
  //         .catch(err => {console.log(err)})
  // }, [])

  //then map over the friends array and render a component for each friend

  //axios call that gets fired whenever a delete button gets clicked

  // useEffect(() => {
  //     axios.delete(`localhost:5000/${deleteThisFriend.id}`)
  //         .then(res => {console.log(res)})
  //         .catch(err => {console.log(err)})
  // }, [deleteThisFriend])

  return friends.map(friend => {
    return (
      <div>
        <p>{friend}</p>
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
