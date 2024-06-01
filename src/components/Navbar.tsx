import { useMediaQuery } from "@uidotdev/usehooks";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  const [toggle, setToggle] = useState(true);
  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-white w-full py-2  ">
      {isSmallDevice ? (
        <nav className="flex justify-between px-4 container relative">
          <NavLink to="/" className="font-bold">
            GymBuddy
          </NavLink>
          <BiMenuAltRight
            size={20}
            className={`${toggle ? "rotate-0" : "rotate-180"} duration-300`}
            onClick={() => setToggle((t) => !t)}
          />

          <div className=" bg-white flex-col gap-4 absolute p-4 hidden">
            <ul className="flex flex-col gap-4">
              <NavLink to="/workout-plans">Workout Plans</NavLink>
              <NavLink to="/exercise-library">Exercise Library</NavLink>
              <NavLink to="/about-us">About Us</NavLink>
            </ul>

            <div className="flex items-center flex-col gap-2 ">
              <NavLink
                to="sign-up"
                className="px-8 py-2 rounded-sm bg-white border-2 border-black"
              >
                Sign Up
              </NavLink>
              <NavLink
                to="login"
                className="px-8 py-2 rounded-sm bg-black text-white border-2 border-white"
              >
                Login
              </NavLink>
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
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
