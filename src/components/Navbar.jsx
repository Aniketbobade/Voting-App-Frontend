import React from "react";
import { Link } from "react-router-dom";
const Navnar = () => {
  return (
    <div className="w-full flex justify-between items-center bg-gray-100 p-4">
      <Link to="/" className="text-lg font-bold text-blue-500 hover:text-blue-700">Home</Link>
      <h1 className="text-2xl font-bold text-gray-800">Voting App</h1>
    </div>
  );
};

export default Navnar;
