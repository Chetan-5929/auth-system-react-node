import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const [values, setValues] =useState({
       email:'',
       password:'',
    })
    const handlechanges = (e) => {
        setValues({...values, [e.target.name]:[e.target.value]})
    }
    const handlesubmit = async (e) =>{
       e.preventDefault()
       try{
        const response = await axios.post('http://localhost:3000/auth/Login', values)
        console.log(response)
       } catch(err) {
           console.log(err)
       }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"> 
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handlesubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
           name= "username" onChange={handlechanges} />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name= "email" onChange={handlechanges}/>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              name= "password" onChange={handlechanges}/>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Don'have account?</p>
          <Link to="/Register" className="text-blue-500 hover:underline hover:text-blue-600">
  Signup
</Link>

        </div>
      </div>
    </div>
  );
};

export default Login;

