import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
const RootLayout = lazy(() => import("./pages/_root/rootLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Workout = lazy(() => import("./pages/Workout"));
const Library = lazy(() => import("./pages/Library"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const App = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="workout-plans"
          element={user ? <Workout /> : <Navigate to={"/login"} />}
        />
        <Route
          path="exercise-library"
          element={user ? <Library /> : <Navigate to={"/login"} />}
        />
        <Route path="about-us" element={<About />} />
        <Route path="sign-up" element={<Signup />} />
        <Route
          path="login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
