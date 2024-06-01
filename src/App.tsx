import { Route, Routes } from "react-router-dom";
import RootLayout from "./pages/rootLayout";
import Homepage from "./pages/Homepage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="workout-plans" />
        <Route path="exercise-library" />
        <Route path="about-us" />
      </Route>
    </Routes>
  );
};

export default App;
