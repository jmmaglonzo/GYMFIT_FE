import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader";

const rootLayout = () => {
  return (
    <>
      <Navbar />
      <main className=" ">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default rootLayout;
