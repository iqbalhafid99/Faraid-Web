import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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
      });
  };

  return (
    <div className="bg-primary h-screen w-full flex items-center justify-center">
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
    </div>
  );
}

export default Login;
