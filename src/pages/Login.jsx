import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import hero from "../assets/main/home.png";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
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
    if (email === "admin@gmail.com" && password === "1234") {
      navigate("/admin"); // Redirect to admin page
    } else if (email === "user@gmail.com" && password === "1234") {
      navigate("/"); // Redirect to home page
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid email or password!",
      });
    }
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
              />
            </div>
            <div className="pt-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
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
