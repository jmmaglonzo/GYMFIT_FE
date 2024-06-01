import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const rootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 container">
        <Outlet />
      </main>
    </>
  );
};

export default rootLayout;
