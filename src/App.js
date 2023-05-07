import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:email" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
