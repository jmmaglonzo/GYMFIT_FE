import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();

  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    logout();
  };
  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-white w-full py-2  ">
      {isSmallDevice ? (
        <nav className="flex justify-between px-4 container relative">
          <NavLink to="/" className="font-bold">
            GymBuddy
          </NavLink>
          <BiMenuAltRight
            size={20}
            className={`${toggle ? "rotate-180" : "rotate-0"} duration-300`}
            onClick={() => setToggle((t) => !t)}
          />

          <div
            className={`bg-white flex-col gap-4 absolute duration-300 left-0 top-8  p-4 w-full ${
              toggle ? "visible opacity-100" : "invisible opacity-0"
            } `}
          >
            <ul className="flex flex-col items-center gap-8">
              <NavLink to="/workout-plans">Workout Plans</NavLink>
              <NavLink to="/exercise-library">Exercise Library</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
            </ul>

            <div className="flex items-center mt-12 flex-col gap-2 ">
              <NavLink
                to="sign-up"
                className="px-8 py-2 rounded-sm text-sm w-full text-center bg-white border-2 border-black"
              >
                Sign Up
              </NavLink>
              <NavLink
                to="login"
                className="px-8 py-2 rounded-sm text-sm w-full text-center bg-black text-white border-2 border-white"
              >
                Login
              </NavLink>
              <div>
                <button
                  className="px-8 py-2 rounded-sm text-sm w-full text-center bg-black text-white border-2 border-white"
                  onClick={handleClick}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className=" items-center gap-4 container flex ">
          <NavLink to="/" className="font-bold flex-1 text-3xl">
            GYMFIT
          </NavLink>
          <ul className="flex gap-4 text-sm">
            <NavLink
              to="/workout-plans"
              className={({ isActive }) =>
                `${isActive && "border-b-2 border-black font-bold"}`
              }
            >
              Workout Plans
            </NavLink>
            <NavLink
              to="/exercise-library"
              className={({ isActive }) =>
                `${isActive && "border-b-2 border-black font-bold"}`
              }
            >
              Exercise Library
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `${isActive && "border-b-2 border-black font-bold"}`
              }
            >
              About us
            </NavLink>
          </ul>

          <div className="flex items-center gap-2">
            <NavLink
              to="/sign-up"
              className="px-8 text-xs py-2 rounded-sm bg-white border border-black"
            >
              Sign Up
            </NavLink>
            <NavLink
              to="/login"
              className="px-8 text-xs py-2 rounded-sm bg-black text-white border border-white"
            >
              Login
            </NavLink>
            <div>
              <button
                className="px-8 text-xs py-2 rounded-sm bg-black text-white border border-white"
                onClick={handleClick}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
