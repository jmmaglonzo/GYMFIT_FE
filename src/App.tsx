import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/rootLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Workout from "./pages/Workout";
import Library from "./pages/Library";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="workout-plans" element={<Workout />} />
        <Route path="exercise-library" element={<Library />} />
        <Route path="about-us" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
