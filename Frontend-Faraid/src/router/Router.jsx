import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Hitung from "../pages/Hitung";
import Hasil from "../pages/Hasil";
import Keilmuan from "../pages/Keilmuan";
import Error from "../pages/Error";
import Admin from "../pages/Admin";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hitung" element={<Hitung />} />
        <Route path="/hasil" element={<Hasil />} />
        <Route path="/keilmuan" element={<Keilmuan />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default routes;
