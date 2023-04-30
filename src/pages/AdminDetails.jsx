import React from 'react'
import { useSelector } from 'react-redux';

const AdminDetails = () => {
  const adminData = useSelector((state) => state.data.value);
  console.log(adminData);

  // const name=adminData.name;
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
  <div className="text-lg font-bold mb-4">Admin Details:</div>
  <div className="mb-2"><p className="font-medium">Admin Id:</p> {adminData.data.id} </div>
  <div className="mb-2"><p className="font-medium">Admin Name:</p> {adminData.data.name}</div>
  <div><p className="font-medium">Admin Username:</p> {adminData.data.usename}</div>
</div>

  )
}

export default AdminDetails