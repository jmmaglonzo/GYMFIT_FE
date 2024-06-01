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
          <span className="font-bold">GymBuddy</span>
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
          <span className="flex-1">GymBuddy</span>
          <ul className="flex gap-4">
            <NavLink to="/workout-plans">Workout Plans</NavLink>
            <NavLink to="/exercise-library">Exercise Library</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
          </ul>

          <div className="flex items-center gap-2">
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
        </nav>
      )}
    </header>
  );
};

export default Navbar;
