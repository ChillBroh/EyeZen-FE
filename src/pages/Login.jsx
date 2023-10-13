import React, { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/main/home.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., sending data to an API)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="grid lg:grid-cols-2 px-12 pt-10 lg:pt-0 lg:px-32 gap-10">
      <div className="flex justify-center items-center h-full">
        <div>
          <span className="text-[46px] font-extrabold text-[#004AAD]">
            Login
          </span>
          <h2 className="pt-8 font-semibold">
            Unlock a World of Visual Wellness
          </h2>
          <form onSubmit={handleFormSubmit}>
            <div className="pt-6">
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
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div className="pt-6">
              <button
                type="submit"
                className="bg-[#004AAD] text-white font-bold px-6 py-3 rounded-md hover:bg-blue-800"
              >
                Login
              </button>
            </div>
          </form>
          <div className="pt-6">
            <Link to="/register" className="text-[#004AAD] hover:underline">
              Not a member ? Register
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

export default Login;
