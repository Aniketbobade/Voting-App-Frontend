import axios from "axios";
import React, { useEffect, useState } from "react";



const VoterRegistration = () => {
  const [names, setNames] = useState([]);

  const [userData, setUserData] = useState({
    adminName: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/admin/getAllAdmin")
      .then((response) => {
        setNames(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => {
      if (name === "adminName") {
        return {
          ...prevUserData,
          adminName: value,
        };
      }
      return {
        ...prevUserData,
        [name]: value,
      };
    });
  };

  const [voterResponse, setVoterResponse] = useState({
    adminId: "",
    adminName: "",
    voterId: "",
    voterName: "",
    voterUserName: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(userData);
    const response = await axios.post(
      "http://localhost:8080/voter/save",
      userData
    );
    console.log(response);
    setVoterResponse(response.data);
  };

  return (
    <div>
    <h1>Voter Registration</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col mb-4">
          <label
            htmlFor="firstName"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Enter your First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={userData.firstName}
            onChange={handleChange}
            className="border rounded-lg py-2 px-3 text-gray-900 w-full"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="lastName"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Enter your Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={userData.lastName}
            onChange={handleChange}
            className="border rounded-lg py-2 px-3 text-gray-900 w-full"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="username"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Set your username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={userData.username}
            onChange={handleChange}
            className="border rounded-lg py-2 px-3 text-gray-900 w-full"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="password"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Set your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            className="border rounded-lg py-2 px-3 text-gray-900 w-full"
          />
        </div>
        <div>
          Select a Admin:
          <select
            name="adminName"
            value={userData.adminName}
            onChange={handleChange}
          >
            {names.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      <div>
        <div>
          <p>Your Id : {voterResponse.voterId} </p>
        </div>
        <div>
          <p>Your Name:{voterResponse.voterName} </p>
        </div>
        <div>
          <p>You selected the admin:-{voterResponse.adminName} </p>
        </div>
        <div>
          <p>Your username:{voterResponse.voterUserName} </p>
        </div>
      </div>
    </div>
  );
};
export default VoterRegistration;
