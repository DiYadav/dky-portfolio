import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
