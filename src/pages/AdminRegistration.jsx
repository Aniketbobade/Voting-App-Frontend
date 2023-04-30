import React, { useState } from 'react'
import axios from 'axios';


function AdminRegistration() {
    const [adminData, setAdminData]= useState({
        adminName:"",
        userName:"",
        password:""
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setAdminData((prevAdminData) => ({
          ...prevAdminData,
          [name]: value,
        }));
      };

      const[adminResponse, setAdminResponse]= useState({
        adminName:"",
        adminId:"",
        adminUsername:""
      })
      const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post("http://localhost:8080/admin/save", adminData);
        console.log(response);
        setAdminResponse(response.data);
      };

  return (
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
    <h1>Admin Registration</h1>
    <form onSubmit={handleSubmit} class="flex flex-col">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Enter Admin Name
        <input 
          type="text" 
          value={adminData.adminName} 
          id="adminName"
          name='adminName'
          onChange={handleChange} 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
  
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Set username
        <input 
          type="text" 
          value={adminData.userName} 
          id="userName"
          name='userName'
          onChange={handleChange} 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>
  
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Set password
        <input 
          type="password" 
          value={adminData.password} 
          id="password"
          name='password'
          onChange={handleChange} 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </label>  
  
      <button 
        type='submit' 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>  
    </form>
    <div>
      <div><p>Admin Id: {adminResponse.adminId} </p></div>
      <div><p>Admin Name: {adminResponse.adminName} </p></div>
      <div><p>Admin UserName: {adminResponse.adminUsername}</p></div>
    </div>
  </div>
  
  )
}

export default AdminRegistration