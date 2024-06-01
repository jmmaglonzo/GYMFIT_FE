import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const RootLayout = lazy(() => import("./pages/_root/rootLayout"));
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Workout = lazy(() => import("./pages/Workout"));
const Library = lazy(() => import("./pages/Library"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="workout-plans" element={<Workout />} />
        <Route path="exercise-library" element={<Library />} />
        <Route path="about-us" element={<About />} />
        <Route path="sign-up" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default App;
