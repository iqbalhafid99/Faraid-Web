import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import HouseIcon from "@mui/icons-material/House";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        Swal.fire(
          "Berhasil Login!",
          "Silahkan klik untuk melanjutkan!",
          "success"
        );
        navigate("/admin");
      })
      .catch((err) => {
        setError("Sandi atau password salah");
        console.log(err.message);
      });
  };

  return (
    <div className="relative bg-primary h-screen w-full flex items-center justify-center">
      <div className="w-[30%] h-[80%] rounded-lg bg-gray-100">
        <div className="flex items-center flex-col justify-center ">
          <h1 className="text-center mt-16 text-3xl font-semibold text-primary">
            Login
          </h1>
          {error && <p className="mt-5 text-red-600">{error}</p>}
          <div className="flex-col mt-10 flex w-[80%]">
            <label className="mb-3 text-primary">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary"
              type="email"
            />

            <label className="mb-3 mt-6 text-primary">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary"
              type="password"
            />
          </div>

          <button
            onClick={handleLogin}
            className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary mt-10 py-3 px-10 text-center"
          >
            Masuk
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 right-10">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-100 p-4 rounded-full hover:shadow-lg hover:bg-gray-300 transition duration-500"
        >
          <HouseIcon className="scale-150 text-primary" />
        </button>
      </div>
    </div>
  );
}

export default Login;
