import React, {useState, useEffect} from 'react';
import axios from 'axios';

function NewFriendForm(props) {
    const [newFriend, setNewFriend] = useState({
  id: null,
  name: '',
  age: null,
  email: '',
});

    const handleChange = e => {
        switch (e.target.id){
            case "newfriendname": 
            setNewFriend({...newFriend, id: Date.now(), name: e.target.value})
            // console.log(newFriend)
            break;
            case "newfriendage": 
            setNewFriend({...newFriend, age: e.target.value})
            break;
            case "newfriendemail": 
            setNewFriend({...newFriend,  email: e.target.value})
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        //axios with auth call goes here, posting the data to the localserver
        // axios.post('localhost:5000', {...newFriend})
        //     .then(res => {console.log(res)})
        //     .catch(err => {console.log(err)})
    }

    return (
        <form onChange={handleChange}>
           <label for="newfriendname">Name<input type="text" id="newfriendname"/> </label>
           <label for="newfriendage">Age<input type="text" id="newfriendage"/> </label>
           <label for="newfriendemail">Email<input type="text" id="newfriendemail"/> </label>
           <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default NewFriendForm;