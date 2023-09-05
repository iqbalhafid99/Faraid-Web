import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="bg-primary px-10  flex justify-between items-center py-5">
      <Link to={"/"} className="font-berkshire text-4xl text-gray-100">
        FARAID
      </Link>
      <div>
        <ul className="flex gap-10">
          <li className="text-lg text-gray-100 font-semibold">
            <Link
              to={"/hitung"}
              className="hover:text-green-800 hover:font-bold transition duration-500"
            >
              Hitung
            </Link>
          </li>
          <li className="text-xl text-gray-100 font-semibold">
            <Link
              to={"/keilmuan"}
              className="hover:text-green-800 hover:font-bold transition duration-500"
            >
              Keilmuan
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to={"/login"}>
          <AccountCircleIcon
            fontSize="large"
            className="text-gray-100 hover:scale-125 hover:text-green-800 transition duration-500"
          />
          <p className="text-xs font-bold text-gray-100">Admin</p>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
