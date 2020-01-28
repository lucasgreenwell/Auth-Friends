import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../tools/axiosWithAuth";

function NewFriendForm(props) {
  const friends = props.friends;
  const setFriends = props.setFriends;

  const [newFriend, setNewFriend] = useState({
    id: null,
    name: "",
    age: null,
    email: ""
  });

  const [postThisFriend, setPostThisFriend] = useState({});

  const handleChange = e => {
    switch (e.target.id) {
      case "newfriendname":
        setNewFriend({ ...newFriend, id: Date.now(), name: e.target.value });
        console.log(newFriend);
        break;
      case "newfriendage":
        setNewFriend({ ...newFriend, age: e.target.value });
        break;
      case "newfriendemail":
        setNewFriend({ ...newFriend, email: e.target.value });
    }
  };
  const handleSubmit = e => {
    e.preventDefault();

    setPostThisFriend({ ...newFriend });

    setNewFriend({
      id: null,
      name: "",
      age: null,
      email: ""
    });
  };
  useEffect(() => {
    //axios with auth call goes here, posting the data to the localserver
    console.log("posted friend", postThisFriend);
    axiosWithAuth()
      .post(
        "http://localhost:5000/api/friends",
        postThisFriend,
        localStorage.getItem("token")
      )
      .then(res => {
        props.setFriends(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [postThisFriend]);

  return (
    <form onChange={handleChange}>
      <label htmlFor="newfriendname">Name</label>
      <input type="text" id="newfriendname" value={newFriend.name} />{" "}
      <label htmlFor="newfriendage">Age</label>
      <input
        type="text"
        id="newfriendage"
        value={newFriend.age ? newFriend.age : ""}
      />{" "}
      <label htmlFor="newfriendemail">Email</label>
      <input type="text" id="newfriendemail" value={newFriend.email} />{" "}
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default NewFriendForm;
