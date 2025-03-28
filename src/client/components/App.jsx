import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Navbar from "./Navbar.jsx";

const App = () => {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default App;
