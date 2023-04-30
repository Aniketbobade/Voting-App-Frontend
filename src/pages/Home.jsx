import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col max-w-2xl w-1/4">
  <Link to="/adminLogin" className="m-3 p-3 border border-black rounded-md bg-blue-500 text-white font-medium hover:bg-blue-700">
    Admin Login
  </Link>
  <Link to="/voterLogin" className="m-3 p-3 border border-black rounded-md bg-green-500 text-white font-medium hover:bg-green-700">
    Voter Login
  </Link>
  <Link to="/voterRegistration" className="m-3 p-3 border border-black rounded-md bg-yellow-500 text-gray-800 font-medium hover:bg-yellow-700">
    Voter Registration
  </Link>
  <Link to="/adminRegistration" className="m-3 p-3 border border-black rounded-md bg-red-500 text-white font-medium hover:bg-red-700">
    Admin Registration
  </Link>
</div>

  );
};

export default Home;
