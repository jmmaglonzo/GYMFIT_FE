import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-white w-full py-2 ">
      <nav className="flex items-center gap-4 container">
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
    </header>
  );
};

export default Navbar;
