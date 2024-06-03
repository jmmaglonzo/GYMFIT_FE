import { useMediaQuery } from "@uidotdev/usehooks";
import { useEffect, useRef, useState } from "react";
import { BiMenuAltRight, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const menuRef = useRef<HTMLElement>(null);

  const isSmallDevice = useMediaQuery("only screen and (max-width : 767px)");
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setToggle(true);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);
  const handleClick = () => {
    logout();
  };

  const closeMenu = () => {
    setToggle(true);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-custom-white w-full z-50 py-2">
      {isSmallDevice ? (
        // MOBILE NAV
        <nav
          className="flex justify-between px-4 container relative"
          ref={menuRef}
        >
          <NavLink to="/" className="font-bold" onClick={closeMenu}>
            GymBuddy
          </NavLink>
          <BiMenuAltRight
            size={20}
            className={`${toggle ? "rotate-180" : "rotate-0"} duration-300`}
            onClick={() => setToggle((t) => !t)}
          />

          <div
            className={`bg-white flex-col gap-4 absolute duration-300 left-0 top-8  p-4 w-full ${
              !toggle ? "visible opacity-100" : "invisible opacity-0"
            } `}
          >
            <ul className="flex flex-col items-center gap-8">
              <NavLink
                to="/workout-plans"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-black font-bold"}`
                }
              >
                Workout Plans
              </NavLink>
              <NavLink
                to="/exercise-library"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-black font-bold"}`
                }
              >
                Exercise Library
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${isActive && "border-b-2 border-black font-bold"}`
                }
              >
                About Us
              </NavLink>
            </ul>

            <div className="flex items-center mt-12 flex-col gap-2">
              {user && (
                <div className="flex md:flex-row flex-col gap-2 items-center">
                  <span className="text-sm flex items-center gap-2">
                    <BiUser />
                    {user?.email}
                  </span>
                  <button
                    className="px-8 text-xs py-2 rounded-sm bg-black text-white border border-white"
                    onClick={handleClick}
                  >
                    Logout
                  </button>
                </div>
              )}
              {!user && (
                <>
                  <NavLink
                    to="/sign-up"
                    onClick={closeMenu}
                    className="px-8 text-xs py-2 rounded-sm bg-white border border-black"
                  >
                    Sign Up
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className="px-8 text-xs py-2 rounded-sm bg-black text-white border border-white"
                  >
                    Login
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      ) : (
        <nav className=" items-center gap-4 container flex">
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
            {user && (
              <div className="flex gap-2 items-center">
                <span className="text-sm flex items-center gap-2">
                  <BiUser />
                  {user?.email}
                </span>
                <button
                  className="px-8 text-xs py-2 rounded-sm bg-black text-white border border-white"
                  onClick={handleClick}
                >
                  Logout
                </button>
              </div>
            )}
            {!user && (
              <>
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
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
