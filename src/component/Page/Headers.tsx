import React from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

const Headers = () => {
    const history=useHistory()
    const handleLogout=()=>{
        localStorage.clear();
        history.push("/Login");
        // <Redirect to="/Login"/>
    }
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between max-w-full rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white-700">
        <div className="flex items-center">
          <a href="" className="font-bold text-xl text-indigo-600">
            FWR
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl m-2 p-2 px-5 text-white bg-indigo-600 rounded hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-xl m-2 p-2 px-5 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            About
          </a>
          <a href="#" className="text-xl m-2 p-2 px-5 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Product
          </a>
          <a href="#" className="text-xl m-2 p-2 px-5 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
            Contact
          </a>
          <Link to="/Login" onClick={handleLogout} className="text-xl m-2 p-2 px-5 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"> Logout</Link>
          
        </div>
      </div>
      
    </div>
  );
};

export default Headers;
