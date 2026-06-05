import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">

        <div className="flower flower1"></div>
        <div className="flower flower2"></div>
        <div className="flower flower3"></div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;