import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { useContext } from "react";
// import { AuthContext } from "../../context/authContext";
// import axios from "axios";

const inside_nav = [
  {
    path: "/main_quiz",
    display: "Main Quiz",
  },
  {
    path: "/infant_quiz",
    display: "Infant Eyecare Quiz",
  },
];

const Navbar = () => {
  //   const { user, loading, error, logout } = useContext(AuthContext);

  //   const navigate = useNavigate();

  //   const handleLogout = () => {
  //     logout();
  //     navigate("/login");
  //     window.location.reload();
  //   };

  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <nav className="flex justify-around w-full py-4 bg-gray-50 sticky top-0 z-[999]">
      <div className="flex items-center">
        <h3 className="text-2xl font-bold text-[#41A4FF]">EyeZen</h3>
      </div>
      {/* <!-- left header section --> */}
      <div className="items-center hidden space-x-5 md:flex">
        <Link to="/">Home</Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2">
              Eyecare Quizes
              <ChevronDownIcon
                className="-mr-1 mt-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                {inside_nav.map((item, index) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                        to={item.path}
                      >
                        {item.display}
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <Link to="/ayurvedic">Ayurvedic Eyecare</Link>
        <Link to="/kid_games_home">Games for Kids</Link>
        <Link to="/contactus">Contact us</Link>
      </div>
      {/* <!-- right header section --> */}
      <div className="items-center space-x-3 hidden md:flex">
        <>
          <Link
            to="/login"
            className="px-4 py-2 text-white font-bold bg-[#41A4FF] text-center hover:bg-blue-500 cursor-pointer rounded-md"
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-white font-bold bg-gray-800 text-center hover:bg-gray-600 cursor-pointer rounded-md"
          >
            Sign up
          </Link>
        </>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineMenu size={20} style={{ color: "black" }} />
        ) : (
          <AiOutlineClose size={20} style={{ color: "black" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
