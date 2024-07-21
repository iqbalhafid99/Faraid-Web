import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Hitung from "../pages/Hitung";
import Keilmuan from "../pages/Keilmuan";
import Error from "../pages/Error";
import Admin from "../pages/Admin";
import Edit from "../pages/Edit";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hitung" element={<Hitung />} />
        <Route path="/keilmuan" element={<Keilmuan />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default routes;
