import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const rootLayout = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default rootLayout;
