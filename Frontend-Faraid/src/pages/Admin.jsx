import NavbarAdmin from "../components/NavbarAdmin";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <div className="flex flex-col items-center mt-20 gap-10">
        <form action="" className="w-[80%] mx-auto flex flex-col items-center">
          <div className="flex-col mt-10 flex w-[100%]">
            <label className="mb-3 text-primary">Judul</label>
            <input
              className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary"
              type="text"
            />

            <label className="mb-3 mt-6 text-primary">Isi Konten</label>
            <textarea className="w-[100%] rounded-lg pt-3 border-2 px-2 py-2 border-primary h-[200px]" />
          </div>

          <Link to={"/admin"}>
            <button className="hover:bg-green-700 transition duration-500 hover:shadow-lg hover:scale-105 text-white font-semibold rounded-full  bg-primary mt-10 py-3 px-10 text-center">
              Create
            </button>
          </Link>
        </form>
      </div>
      <div className="mt-20 w-[90%] mx-auto">
        <div className="overflow-x-auto">
          <table className="table text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="w-[10%] border">No</th>
                <th className="w-[40%] border">Judul</th>
                <th className="w-[20%] border">Edit</th>
                <th className="w-[20%] border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th className="border">1</th>
                <td className="border">Cy Ganderton</td>
                <td className="border">
                  <Link>
                    <EditIcon />
                  </Link>
                </td>
                <td className="border">
                  <Link>
                    <DeleteIcon />
                  </Link>
                </td>
              </tr>
              {/* row 2 */}
              <tr>
                <th className="border">2</th>
                <td className="border">Hart Hagerty</td>
                <td className="border">
                  <Link>
                    <EditIcon />
                  </Link>
                </td>
                <td className="border">
                  <Link>
                    <DeleteIcon />
                  </Link>
                </td>
              </tr>
              {/* row 3 */}
              <tr>
                <th className="border">3</th>
                <td className="border">Brice Swyre</td>
                <td className="border">
                  <Link>
                    <EditIcon />
                  </Link>
                </td>
                <td className="border">
                  <Link>
                    <DeleteIcon />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mb-20"></div>
    </div>
  );
}

export default Admin;
