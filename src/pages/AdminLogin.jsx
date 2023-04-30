import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../redux/slice/slice1";



const AdminLogin = () => {
  const [userName, setUserName] = useState("");
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
    const data = { userName, password };
    const response = await axios.post("http://localhost:8080/admin/login", data);
    // dispatch(setData(response));
    // navigate("/adminDetails");
    if (response.data !== "") {
      // do something if response is not null
      dispatch(setData(response));
      navigate("/adminDetails");
    } else {
      // do something else if response is null
      console.log("inccorect login");
      alert("inccorect login");
    }
  }
  return (
    <div>
    <div>Admin Login </div>
       <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" value={userName} onChange={handleUserNameChange} />
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
  );
};

export default AdminLogin;
