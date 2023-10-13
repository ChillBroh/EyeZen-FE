import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import hero from "../assets/main/home.png";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import Loader from "../components/Loader";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const [loading2, setLoading2] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    if (!credentials.email || !credentials.password) {
      Swal.fire("Please enter your email and password", "", "error");
    }
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      Swal.fire("Please enter a valid email address", "", "error");
    }
    try {
      setLoading2(true);
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      setLoading2(false);
      if (res.data.isAdmin === true) {
        navigate("/admin");
      }
      if (res.data.isAdmin === false) {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setTimeout(() => {
        Swal.fire(err.response.data, "", "error");
      }, 2000);
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
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="pt-4">
              <input
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={handleChange}
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
          {loading && <Loader />}
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
