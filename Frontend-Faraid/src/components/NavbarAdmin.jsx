import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function NavbarAdmin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Yakin ingin Keluar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yakin!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logout!", "Berhasil logout.", "success");
        localStorage.removeItem("token");
        navigate("/login");
      }
    });
  };
  return (
    <div className="bg-primary px-10  flex justify-between items-center py-5">
      <Link to={"/"} className="font-berkshire text-4xl text-gray-100">
        FARAID
      </Link>

      <div className="flex flex-col justify-center items-center">
        <button
          onClick={handleLogout}
          className="text-base font-bold text-gray-100"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export default NavbarAdmin;
