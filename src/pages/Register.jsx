import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/main/home.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., sending data to an API)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="grid lg:grid-cols-2 px-12 py-20 pt-10 lg:pt-0 lg:px-32 gap-10">
      <div className="flex justify-center items-center h-full">
        <div>
          <span className="text-[46px] font-extrabold text-[#004AAD]">
            Register
          </span>
          <h2 className="pt-8 font-semibold">
            Create an Account for Visual Wellness
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="pt-6">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className="pt-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="pt-4">
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
            </div>
            <div className="pt-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="pt-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                className="bg-[#004AAD] text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800"
              >
                Register
              </button>
            </div>
          </form>
          <div className="pt-6">
            <Link to="/login" className="text-[#004AAD] hover:underline">
              Already a member? Login
            </Link>
          </div>
        </div>
      </div>

      <div>
        <img
          className="rounded-3xl lg:h-[635px] h-full w-full object-cover"
          src={hero}
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
