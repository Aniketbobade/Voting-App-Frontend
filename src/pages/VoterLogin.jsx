import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setVoterData } from '../redux/slice/slice2';

const VoterLogin = () => {
    const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const dispatch = useDispatch();

  

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  async function handleSubmit(e) {
    e.preventDefault();
    const data = { username, password };
    console.log(data);
    const response = await axios.post("http://localhost:8080/voter/login", data);
    console.log(response);
    if (response.data.requestStatus === true) {
      // do something if response is not null
      dispatch(setVoterData(response));
      navigate("/voterDetails");
    } else {
      // do something else if response is null
      console.log("inccorect login");
      alert("inccorect login");
    }
  }
  return (
    <div>
    <div>Voter login</div>
        <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" value={username} onChange={handleUserNameChange} />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default VoterLogin