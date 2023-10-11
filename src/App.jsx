import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clock from "./Pages/Clock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Fetch from "./pages/Fetch";
const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/fetch" element={<Fetch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
